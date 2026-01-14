import { useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'

export function AnalyticsTracker() {
  const router = useRouter()

  useEffect(() => {
    const unsub = router.subscribe('onResolved', () => {
      window.gtag?.('event', 'page_view', {
        page_path: window.location.pathname,
      })
    })

    return unsub
  }, [router])

  return null
}
