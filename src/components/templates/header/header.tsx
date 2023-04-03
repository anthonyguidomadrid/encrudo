import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'

import { Logo, MenuItem } from '../layout'

import { LanguageSelector } from './'

import HamburgerMenu from '@icons/menu.svg'

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

  const scrollFunction = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setIsPageScrolled(true)
    } else {
      setIsPageScrolled(false)
    }
  }

  global.onscroll = () => scrollFunction()

  const isDark = ispageScrolled || isMenuOpen

  return (
    <>
      <nav
        className={classNames(
          'flex items-center justify-between flex-wrap p-5 text-base uppercase fixed top-0 w-full z-50 text-white',
          {
            'bg-white bg-opacity-80 text-primary': isDark
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
              className="h-7"
              width="100"
              height="28"
            />
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <HamburgerMenu
              className={classNames('h-6 w-6', {
                'fill-white': !isDark,
                'fill-primary': isDark
              })}
            />
          </button>
        </div>
        <div
          className={classNames(
            'w-full block flex-grow md:flex md:items-center md:w-auto',
            { hidden: !isMenuOpen }
          )}
        >
          <div className="text-sm md:flex-grow">
            <div className="flex flex-col md:flex-row md:justify-center gap-5 my-5 md:my-0">
              {menuContent?.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    className={classNames({
                      'text-primary': isDark
                    })}
                    href={item?.link ?? ''}
                    onClick={() => setMenuOpen && setMenuOpen(false)}
                  >
                    {item?.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div>
            <LanguageSelector isDark={isDark} />
          </div>
        </div>
      </nav>
    </>
  )
}
