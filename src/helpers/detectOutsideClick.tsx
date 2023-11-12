import { useCallback, useEffect, useRef } from 'react'

interface OutsideClickDetectorProps {
  isMenuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const OutsideClickDetector: React.FC<OutsideClickDetectorProps> = ({
  isMenuOpen,
  setMenuOpen,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        isMenuOpen && setMenuOpen(false)
      }
    },
    [isMenuOpen, setMenuOpen]
  )

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside)

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return <div ref={containerRef}>{children}</div>
}
