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

const requestUrl = `https://api.bunny.net/pullzone/${encodeURIComponent(pullZoneId)}/purgeCache`
const requestInit = {
  method: 'POST',
  headers: {
    AccessKey: apiKey,
  },
}

if (cacheTag) {
  requestInit.headers['Content-Type'] = 'application/json'
  requestInit.body = JSON.stringify({ CacheTag: cacheTag })
}

const response = await fetch(requestUrl, requestInit)

if (!response.ok) {
  const responseText = await response.text()
  fail(`Bunny purge failed with ${response.status} ${response.statusText}: ${responseText}`)
}

console.log(
  cacheTag
    ? `Purged Bunny cache tag "${cacheTag}" for pull zone ${pullZoneId}.`
    : `Purged Bunny cache for pull zone ${pullZoneId}.`,
)
