import { useEffect, useState } from 'react'

export const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop('matches' in event ? event.matches : mediaQuery.matches)
    }

    handleChange(mediaQuery)

    if ('addEventListener' in mediaQuery) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    // Safari fallback
    const legacyMediaQuery = mediaQuery as unknown as {
      addListener: (listener: (event: MediaQueryListEvent) => void) => void
      removeListener: (listener: (event: MediaQueryListEvent) => void) => void
    }
    legacyMediaQuery.addListener(
      handleChange as (event: MediaQueryListEvent) => void
    )
    return () =>
      legacyMediaQuery.removeListener(
        handleChange as (event: MediaQueryListEvent) => void
      )
  }, [])

  return { isDesktop }
}
