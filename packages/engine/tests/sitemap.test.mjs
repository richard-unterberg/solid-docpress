import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { createNivelVikeConfig } from '../dist/vike.js'

const createDocsGraph = () => {
  return {
    items: [
      {
        kind: 'section',
        id: 'docs',
        title: 'Docs',
        items: [
          {
            kind: 'page',
            id: 'intro',
            title: 'Intro',
            slug: 'intro',
            source: 'content/intro/content.mdx',
            aliases: ['start'],
          },
        ],
      },
    ],
  }
}

const createTempRoot = () => {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'nivel-sitemap-'))
}

const writeFile = (filePath, contents) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, contents)
}

const withCwd = async (directoryPath, callback) => {
  const previousCwd = process.cwd()
  process.chdir(directoryPath)

  try {
    return await callback()
  } finally {
    process.chdir(previousCwd)
  }
}

const getPlugin = (config, name) => {
  const plugin = (config.vite.plugins ?? []).find((candidate) => candidate?.name === name)

  assert.ok(plugin, `Expected plugin ${name} to be present`)

  return plugin
}

const runCloseBundle = async (plugin) => {
  await plugin.closeBundle?.call({
    environment: {
      config: {
        build: {
          outDir: 'dist/client',
        },
        consumer: 'client',
      },
    },
  })
}

test('sitemap output uses canonical docs URLs and robots references the correct sitemap URL', async () => {
  const rootDir = createTempRoot()

  try {
    writeFile(path.join(rootDir, 'docs', 'content', 'intro', 'content.mdx'), '# Intro\n')
    writeFile(path.join(rootDir, 'pages', 'index', '+Page.tsx'), 'export default null\n')
    writeFile(path.join(rootDir, 'pages', '(nivel-generated)', 'intro', '+Page.tsx'), 'export default null\n')
    writeFile(path.join(rootDir, 'pages', '(nivel-generated)', 'start', '+Page.tsx'), 'export default null\n')

    await withCwd(rootDir, async () => {
      const docsConfig = {
        basePath: '/docs',
        graph: createDocsGraph(),
        siteTitle: 'My Docs',
        siteUrl: 'https://docs.example.com/base',
      }
      const config = createNivelVikeConfig(docsConfig)
      const sitemapPlugin = getPlugin(config, 'nivel-sitemap-plugin')

      await runCloseBundle(sitemapPlugin)
    })

    const sitemap = fs.readFileSync(path.join(rootDir, 'dist', 'client', 'sitemap.xml'), 'utf8')
    const robots = fs.readFileSync(path.join(rootDir, 'dist', 'client', 'robots.txt'), 'utf8')

    assert.match(sitemap, /https:\/\/docs\.example\.com\/base\//)
    assert.match(sitemap, /https:\/\/docs\.example\.com\/base\/docs\/intro\//)
    assert.match(sitemap, /<lastmod>/)
    assert.doesNotMatch(sitemap, /<changefreq>/)
    assert.doesNotMatch(sitemap, /<priority>/)
    assert.doesNotMatch(sitemap, /https:\/\/docs\.example\.com\/base\/intro\//)
    assert.doesNotMatch(sitemap, /https:\/\/docs\.example\.com\/base\/start\//)
    assert.doesNotMatch(sitemap, /https:\/\/docs\.example\.com\/base\/docs\/start\//)
    assert.match(robots, /User-agent: \*/)
    assert.match(robots, /Disallow: \/cdn-cgi\//)
    assert.match(robots, /Sitemap: https:\/\/docs\.example\.com\/base\/sitemap\.xml/)
  } finally {
    fs.rmSync(rootDir, { force: true, recursive: true })
  }
})

test('sitemap generation fails when docs canonical URLs clash with consumer filesystem pages', async () => {
  const rootDir = createTempRoot()

  try {
    writeFile(path.join(rootDir, 'docs', 'content', 'intro', 'content.mdx'), '# Intro\n')
    writeFile(path.join(rootDir, 'pages', 'intro', '+Page.tsx'), 'export default null\n')

    await withCwd(rootDir, async () => {
      const config = createNivelVikeConfig({
        basePath: '/',
        graph: createDocsGraph(),
        siteTitle: 'My Docs',
        siteUrl: 'https://docs.example.com',
      })
      const sitemapPlugin = getPlugin(config, 'nivel-sitemap-plugin')

      await assert.rejects(async () => {
        await runCloseBundle(sitemapPlugin)
      }, /docs canonical URL/)
    })
  } finally {
    fs.rmSync(rootDir, { force: true, recursive: true })
  }
})
