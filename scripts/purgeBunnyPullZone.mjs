const apiKey = process.env.BUNNY_API_KEY?.trim()
const pullZoneId = process.env.BUNNY_PULL_ZONE_ID?.trim()
const cacheTag = process.env.BUNNY_CACHE_TAG?.trim()

const fail = (message) => {
  console.error(message)
  process.exit(1)
}

if (!apiKey) {
  fail('Missing BUNNY_API_KEY.')
}

if (!pullZoneId) {
  fail('Missing BUNNY_PULL_ZONE_ID.')
}

if (!cacheTag) {
  fail('Missing BUNNY_CACHE_TAG.')
}

const runPullZonePurge = async () => {
  const requestUrl = `https://api.bunny.net/pullzone/${encodeURIComponent(pullZoneId)}/purgeCache`
  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      AccessKey: apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ CacheTag: cacheTag }),
  })

  if (!response.ok) {
    const responseText = await response.text()
    fail(`Bunny pull-zone purge failed with ${response.status} ${response.statusText}: ${responseText}`)
  }

  const responseText = await response.text()

  console.log(
    responseText
      ? `Purged Bunny cache tag "${cacheTag}" for pull zone ${pullZoneId}: ${responseText}`
      : `Purged Bunny cache tag "${cacheTag}" for pull zone ${pullZoneId}.`,
  )
}

await runPullZonePurge()
