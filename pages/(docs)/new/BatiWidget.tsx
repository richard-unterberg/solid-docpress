export { BatiWidget }

import { useEffect, useState } from 'react'

function BatiWidget() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      // Move this import to +client.js once we make non-global +client.js work
      await import('@batijs/elements' as string)
      setIsLoading(false)
    })()
  }, [])

  if (isLoading) {
    return (
      <span className="loading loading-spinner loading-sm block min-h-140"></span>
    )
  }

  return (
    <>
      <div className="container shadow shadow-lg">
        {/* @ts-expect-error */}
        <bati-widget theme="dark" />
      </div>
    </>
  )
}
