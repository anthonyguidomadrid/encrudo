
import throttle from 'lodash.throttle'
import { useState, useEffect } from 'react'

const getDeviceConfig = (width: number) => {
  if (width < 640) {
    return 'sm'
  } else if (width >= 640 && width < 768) {
    return 'md'
  } else if (width >= 768 && width < 1024) {
    return 'lg'
  } else if (width >= 1024 && width < 1280) {
    return 'xl'
  } else if (width >= 1280 && width < 1536) {
    return '2xl'
  }
}

export const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(global.innerWidth))

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200)
    window.addEventListener('resize', calcInnerWidth)
    return () => window.removeEventListener('resize', calcInnerWidth)
  }, [])

  return brkPnt
}