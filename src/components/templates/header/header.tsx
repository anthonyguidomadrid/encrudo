import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'

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

  const scrollFunction = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setIsPageScrolled(true)
      isMenuOpen && setMenuOpen(false)
    } else {
      setIsPageScrolled(false)
    }
  }

  global.onscroll = () => scrollFunction()

  const isDark = ispageScrolled || isMenuOpen

  return (
    <OutsideClickDetector isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}>
      <nav
        className={classNames(
          'flex items-center justify-between flex-wrap p-7 uppercase fixed top-0 w-full z-50 text-white',
          {
            'bg-white bg-opacity-90 text-primary': isDark
          }
        )}
      >
        <div className="flex items-center flex-shrink-0">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src={isDark ? logoDark?.url ?? '' : logoLight?.url ?? ''}
              alt={
                isDark
                  ? logoDark?.description ?? ''
                  : logoLight?.description ?? ''
              }
              className="w-auto h-7"
              width="100"
              height="27"
            />
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center"
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
        <AnimatePresence>
          {(isDesktop || isMenuOpen) && (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classNames(
                'w-full block flex-grow md:flex md:items-center md:w-auto',
                { hidden: !isMenuOpen && !isDesktop }
              )}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-sm md:flex-grow"
              >
                <div className="flex flex-col md:flex-row md:justify-center gap-5 my-5 md:my-0">
                  {menuContent?.map((item, idx) => (
                    <Link
                      key={idx}
                      className={classNames('no-underline hover:opacity-70', {
                        'text-primary': isDark
                      })}
                      href={item?.link ?? ''}
                      onClick={() => setMenuOpen && setMenuOpen(false)}
                      scroll={false}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LanguageSelector
                  isDark={isDark}
                  onClick={() => setMenuOpen(false)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </OutsideClickDetector>
  )
}
