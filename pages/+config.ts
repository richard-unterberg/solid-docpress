import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import telefunc from '@/pages/+telefunc'

export default {
  meta: {
    telefunc: {
      env: {
        server: true,
        client: true,
      },
      global: true,
    },
  },
  title: 'telefunc',
  description: 'telefunc documentation',
  telefunc,
  htmlAttributes: { 'data-theme': 'telefunc-dark' },
  passToClient: ['locale', 'urlPathnameLocalized'],
  extends: [vikeReact],
  prerender: true,
  // Keep this enabled.
  // The docs runtime, generated routes, and the GitHub Pages deployment are
  // currently wired around slash-terminated docs URLs such as `/quick-start/`.
  // Flipping this to `false` causes production-only routing breakage on direct
  // docs entry, so treat this as an app invariant unless the whole docs URL
  // pipeline is revisited together.
  trailingSlash: true,
} satisfies Config
