import { MetaHead } from '@unterberg/docsengine/client'
import docs from './+docs'

export const Head = () => {
  return <MetaHead docsConfig={docs} />
}
