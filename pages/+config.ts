import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import mdex from '@/pages/+mdex'

export default {
  meta: {
    mdex: {
      env: {
        server: true,
        client: true,
      },
      global: true,
    },
  },
  title: 'mdex',
  description: 'mdex docs starter kit',
  mdex,
  htmlAttributes: { 'data-theme': 'mdex-dark' },
  passToClient: ['locale', 'urlPathnameLocalized'],
  extends: [vikeReact],
  prerender: true,
} satisfies Config
