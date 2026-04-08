import { defineDocsGraph } from '@unterberg/nivel/config'

export const docsGraph = defineDocsGraph({
  items: [
    {
      kind: 'section',
      id: 'docs',
      title: 'Docs',
      items: [
        {
          kind: 'page',
          id: 'gettingStarted',
          title: 'Getting Started',
          slug: 'getting-started',
          source: 'content/getting-started/content.mdx',
          description: 'Minimal standalone consumer for validating the published @unterberg/nivel package.',
        },
      ],
    },
  ],
})
