import { memo } from 'react'
import { nivelAssetUrl } from '../../../shared/assets.js'
import { useDocsGlobalContext } from '../docsGlobalContext.js'

const iconAssets = {
  github: nivelAssetUrl('brands/github.svg'),
  discord: nivelAssetUrl(`brands/discord.svg`),
  x: nivelAssetUrl(`brands/x.svg`),
  bluesky: nivelAssetUrl(`brands/bluesky.svg`),
  linkedin: nivelAssetUrl('brands/linkedin.svg'),
}

type SocialPlatform = keyof typeof iconAssets

const SocialIconElement = ({ icon, href }: { icon: SocialPlatform; href: string }) => {
  const socialLabel = icon === 'x' ? 'X' : icon.charAt(0).toUpperCase() + icon.slice(1)

  return (
    <li className="m-0 p-0">
      {/** biome-ignore lint/a11y/useAnchorContent: not now */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-base-muted-light bg-base-200"
        aria-label={`${socialLabel} profile`}
        title={socialLabel}
      >
        <img src={iconAssets[icon]} alt="" aria-hidden="true" className="h-3 w-auto opacity-75 dark:invert" />
      </a>
    </li>
  )
}

const SocialIcons = memo(() => {
  const docs = useDocsGlobalContext()
  const socialEntries = Object.entries(docs.social ?? {}).filter(
    (entry): entry is [SocialPlatform, string] =>
      entry[0] in iconAssets && typeof entry[1] === 'string' && entry[1].length > 0,
  )

  if (socialEntries.length === 0) {
    return null
  }

  return (
    <ul className="flex items-center gap-1">
      {socialEntries.map(([platform, href]) => (
        <SocialIconElement key={platform} icon={platform} href={href} />
      ))}
    </ul>
  )
})

export default SocialIcons
