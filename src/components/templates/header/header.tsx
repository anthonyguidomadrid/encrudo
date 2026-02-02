import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { Logo, MenuItem } from '../layout'

import { LanguageSelector } from './'

import CrossIcon from '@icons/cross.svg'
import HamburgerMenu from '@icons/menu.svg'
import { OutsideClickDetector } from '@src/helpers/detectOutsideClick'
import { useDesktop } from '@src/hooks/useDesktop'

export type HeaderProps = {
  logoLight?: Logo
  logoDark?: Logo
  menuContent?: MenuItem[]
}

export const Header: FunctionComponent<HeaderProps> = ({
  logoLight,
  logoDark,
  menuContent
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [ispageScrolled, setIsPageScrolled] = useState(false)
  const { isDesktop } = useDesktop()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const isMenuOpenRef = useRef(isMenuOpen)
  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen
  }, [isMenuOpen])

  const lastScrollYRef = useRef(0)

  useEffect(() => {
    lastScrollYRef.current = window.scrollY
    setIsPageScrolled(window.scrollY > 0)

    const onScroll = () => {
      const currentY = window.scrollY
      setIsPageScrolled(currentY > 0)

      // Only close the mobile drawer if the user actually scrolls while it's open.
      // This avoids immediately closing it when opening the menu on an already-scrolled page.
      if (!isDesktop && isMenuOpenRef.current) {
        const delta = Math.abs(currentY - lastScrollYRef.current)
        if (delta > 4) closeMenu()
      }

      lastScrollYRef.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [closeMenu, isDesktop])

  useEffect(() => {
    if (!isMenuOpen || isDesktop) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isDesktop, isMenuOpen])

  const isDark = ispageScrolled

  const desktopMenu = useMemo(() => {
    return (
      <motion.div
        key="desktop-menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-sm"
      >
        <ul
          id="main-menu"
          className="flex flex-row justify-center gap-5 list-none p-0 m-0"
        >
          {menuContent?.map((item, idx) => (
            <li key={idx} className="inline-block">
              <Link
                className={classNames(
                  'no-underline hover:opacity-70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]',
                  {
                    'text-primary border-primary': isDark,
                    'border px-3 py-2': item?.isCta
                  }
                )}
                href={item?.link ?? ''}
                onClick={closeMenu}
                scroll={!item?.link?.includes('#')}
              >
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    )
  }, [closeMenu, isDark, menuContent])

  return (
    <header>
      <OutsideClickDetector isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={classNames(
            'flex items-center justify-between flex-wrap p-5 uppercase fixed top-0 w-full z-50 text-white',
            {
              'bg-white bg-opacity-90 text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]':
                isDark,
              'bg-gradient-to-b from-black/50 to-transparent': !isDark
            }
          )}
        >
          <div className="flex items-center flex-shrink-0">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={isDark ? (logoDark?.url ?? '') : (logoLight?.url ?? '')}
                alt={
                  isDark
                    ? (logoDark?.description ?? '')
                    : (logoLight?.description ?? '')
                }
                className="w-auto h-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                width="100"
                height="27"
              />
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              className="flex items-center p-3"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={e => {
                e.stopPropagation()
                setMenuOpen(!isMenuOpen)
              }}
            >
              {isMenuOpen ? (
                <CrossIcon className={'h-6 w-6 text-primary'} />
              ) : (
                <HamburgerMenu
                  className={classNames('h-6 w-6', {
                    'fill-white': !isDark,
                    'fill-primary': isDark
                  })}
                />
              )}
            </button>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            {desktopMenu}
          </div>
          <div className="hidden md:flex items-center justify-end">
            <LanguageSelector isDark={isDark} onClick={closeMenu} />
          </div>
        </nav>

        <AnimatePresence>
          {!isDesktop && isMenuOpen && (
            <>
              <motion.div
                key="mobile-backdrop"
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
              <motion.aside
                key="mobile-drawer"
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Main menu"
                className="fixed right-0 top-0 z-50 h-[100dvh] w-screen sm:w-[min(22rem,88vw)] bg-white text-primary shadow-2xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.25 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between py-6 px-5 border-b border-black/10">
                  <Link href="/" onClick={closeMenu} className="no-underline">
                    <Image
                      src={logoDark?.url ?? logoLight?.url ?? ''}
                      alt={
                        logoDark?.description ?? logoLight?.description ?? ''
                      }
                      className="w-auto h-7"
                      width="100"
                      height="27"
                    />
                  </Link>
                  <button
                    className="p-2"
                    aria-label="Close menu"
                    onClick={closeMenu}
                  >
                    <CrossIcon
                      className={'h-6 w-6 text-primary cursor-pointer'}
                    />
                  </button>
                </div>

                <div className="h-full overflow-y-auto px-5 py-6">
                  <ul className="list-none p-0 m-0 flex flex-col gap-2 text-base">
                    {menuContent?.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          className={classNames(
                            'no-underline w-full block rounded-xl px-4 py-3 hover:bg-primary/5 active:bg-primary/10',
                            {
                              'border border-primary/30':
                                item?.isCta && isDesktop
                            }
                          )}
                          href={item?.link ?? ''}
                          onClick={closeMenu}
                          scroll={!item?.link?.includes('#')}
                        >
                          {item?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-black/10">
                    <LanguageSelector isDark={true} onClick={closeMenu} />
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </OutsideClickDetector>
    </header>
  )
}
