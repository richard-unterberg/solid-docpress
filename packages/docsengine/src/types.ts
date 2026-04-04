export type DocsCollapsible = {
  isDefaultOpen?: boolean
}

export type ThemePreference = 'light' | 'dark'

export type DocsThemeConfig = {
  light: string
  dark: string
  defaultPreference?: ThemePreference
}

export type DocsFooterConfig = {
  pagination?: boolean
}

export type DocsBrandConfig = {
  text?: string
  href?: string
  logoLight?: string
  logoDark?: string
  logoAlt?: string
}

export type DocsPartnerConfig = {
  name: string
  href: string
  logoLight: string
  logoDark?: string
  logoAlt?: string
}

export type DocsPartnersConfig = {
  primary?: DocsPartnerConfig[]
  gold?: DocsPartnerConfig[]
}

export type DocsHeadConfig = {
  faviconSvg?: string
  faviconIco?: string
  appleTouchIcon?: string
  fontPreset?: 'inter' | 'none'
  fontStylesheetHref?: string
  fontPreloadHrefs?: string[]
}

export type DocsPageNode = {
  kind: 'page'
  id: string
  title: string
  slug: string
  source: string
  aliases?: string[]
  tableOfContents?: boolean
  navTitle?: string
  description?: string
}

export type DocsGroupNode = {
  kind: 'group'
  id: string
  title: string
  items: DocsSidebarNode[]
  collapsible?: DocsCollapsible
}

export type DocsDividerNode = {
  kind: 'divider'
  id: string
  title: string
}

export type DocsSectionNode = {
  kind: 'section'
  id: string
  title: string
  navTitle?: string
  items: DocsSidebarNode[]
}

export type DocsSidebarNode = DocsGroupNode | DocsDividerNode | DocsPageNode

export type DocsGraph = {
  items: DocsSectionNode[]
}

export type DocsConfig = {
  siteTitle: string
  siteDescription?: string
  basePath: '/docs'
  graph: DocsGraph
  theme?: DocsThemeConfig
  footer?: DocsFooterConfig
  brand?: DocsBrandConfig
  head?: DocsHeadConfig
  partners?: DocsPartnersConfig
}

export type ResolvedDocsBrandConfig = {
  text: string
  href: string
  logoLight?: string
  logoDark?: string
  logoAlt: string
}

export type ResolvedDocsPartnerConfig = {
  name: string
  href: string
  logoLight: string
  logoDark?: string
  logoAlt: string
}

export type ResolvedDocsPartnersConfig = {
  primary: ResolvedDocsPartnerConfig[]
  gold: ResolvedDocsPartnerConfig[]
}

export type ResolvedDocsHeadConfig = DocsHeadConfig

export type DocHeading = {
  depth: number
  id: string
  title: string
}

export type ResolvedDocsPage = DocsPageNode & {
  href: string
  aliasHrefs: string[]
  tableOfContents: boolean
  documentTitle: string
  sectionId: string
}

export type ResolvedSidebarGroup = {
  kind: 'group'
  id: string
  title: string
  items: ResolvedSidebarNode[]
  collapsible?: DocsCollapsible
}

export type ResolvedSidebarPage = {
  kind: 'page'
  id: string
  title: string
  navTitle: string
  href: string
}

export type ResolvedSidebarDivider = {
  kind: 'divider'
  id: string
  title: string
}

export type ResolvedSidebarNode = ResolvedSidebarGroup | ResolvedSidebarDivider | ResolvedSidebarPage

export type ResolvedDocsSection = {
  id: string
  title: string
  navTitle: string
  href: string
  items: ResolvedSidebarNode[]
}

export type ResolvedNavbarItem = {
  id: string
  title: string
  href: string
}

export type ResolvedDocsConfig = {
  siteTitle: string
  siteDescription: string | null
  basePath: '/docs'
  theme: Required<DocsThemeConfig>
  footer: Required<DocsFooterConfig>
  brand: ResolvedDocsBrandConfig
  head: ResolvedDocsHeadConfig
  partners: ResolvedDocsPartnersConfig
  pages: ResolvedDocsPage[]
  sections: ResolvedDocsSection[]
  navbarItems: ResolvedNavbarItem[]
}

export type DocPageLinkData = Pick<ResolvedDocsPage, 'id' | 'title' | 'href' | 'documentTitle'>

export type DocPageData = {
  siteTitle: string
  basePath: '/docs'
  theme: Required<DocsThemeConfig>
  footer: Required<DocsFooterConfig>
  page: ResolvedDocsPage
  activeSectionId: string
  activeSectionTitle: string
  headings: DocHeading[]
  previousPage: DocPageLinkData | null
  nextPage: DocPageLinkData | null
  navbarItems: ResolvedNavbarItem[]
  sidebarItems: ResolvedSidebarNode[]
  sidebarSections: ResolvedDocsSection[]
}
