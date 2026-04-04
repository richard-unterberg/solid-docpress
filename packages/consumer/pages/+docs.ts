import { defineDocsConfig } from '@unterberg/docsengine'
import { docsGraph } from '../docs/docs.graph'

export default defineDocsConfig({
  siteTitle: 'telefunc',
  siteDescription: 'telefunc documentation',
  basePath: '/docs',
  theme: {
    light: 'telefunc-light',
    dark: 'telefunc-dark',
    defaultPreference: 'dark',
  },
  footer: {
    pagination: true,
  },
  brand: {
    text: 'Telefunc',
    href: '/',
    logoLight: '/logo-light.svg',
    logoDark: '/logo-dark.svg',
    logoAlt: 'Telefunc logo',
  },
  head: {
    faviconSvg: '/favicon.svg',
    faviconIco: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  partners: {
    primary: [
      {
        name: 'Tencent Cloud',
        href: 'https://www.tencentcloud.com',
        logoLight: 'partners/tencent.svg',
      },
    ],
    gold: [
      {
        name: 'Labs',
        href: 'https://labs.void.dev',
        logoLight: 'partners/labs.svg',
      },
      {
        name: 'Bolt',
        href: 'https://bolt.com',
        logoLight: 'partners/bolt.svg',
      },
      {
        name: 'Telefunc',
        href: 'https://telefunc.com',
        logoLight: 'partners/telefunc.svg',
      },
      {
        name: 'Void(0)',
        href: 'https://void.dev',
        logoLight: 'partners/void-0.svg',
      },
    ],
  },
  graph: docsGraph,
})
