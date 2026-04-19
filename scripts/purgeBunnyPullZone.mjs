const apiKey = process.env.BUNNY_API_KEY?.trim()
const purgeUrl = process.env.BUNNY_PULL_ZONE_URL?.trim()

const fail = (message) => {
  console.error(message)
  process.exit(1)
}

if (!apiKey) {
  fail('Missing BUNNY_API_KEY.')
}

if (!purgeUrl) {
  fail('Missing purge target. Set BUNNY_PURGE_URL or BUNNY_PULL_ZONE_URL.')
}

const runUrlPurge = async () => {
  const requestUrl = new URL('https://api.bunny.net/purge')
  requestUrl.searchParams.set('url', purgeUrl)

  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      AccessKey: apiKey,
    },
  })

  if (!response.ok) {
    const responseText = await response.text()
    fail(`Bunny URL purge failed with ${response.status} ${response.statusText}: ${responseText}`)
  }

  console.log(`Purged Bunny cache for URL ${purgeUrl}.`)
}

await runUrlPurge()
