import docsengine from '@unterberg/docsengine/config'
import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import docs from './+docs'

export { config }

const config: Config = {
  ...docsengine,
  title: docs.siteTitle,
  description: docs.siteDescription ?? `${docs.siteTitle} documentation`,
  extends: [vikeReact],
  htmlAttributes: { 'data-theme': 'telefunc-dark' },
  prerender: true,
}
