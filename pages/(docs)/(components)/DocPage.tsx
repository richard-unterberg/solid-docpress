import { usePageContext } from 'vike-react/usePageContext'
import { getDocPage } from '@/lib/docs/content'

const DocPage = ({ slug }: { slug: string }) => {
  const { locale } = usePageContext()
  const entry = getDocPage(slug, locale)
  const Page = entry?.Page

  if (!Page) return <p>Missing document: {slug}</p>

  return <Page />
}

export const createDocPage = (slug: string) => {
  return () => <DocPage slug={slug} />
}
