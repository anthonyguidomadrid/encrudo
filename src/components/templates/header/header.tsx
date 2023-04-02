import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'

import { Logo, MenuItem } from '../layout'

import { MenuLinks, LanguageSelector } from './'

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
    <nav
      className={classNames('fixed top-0 w-full z-50 p-5 text-white text-base uppercase', {
        'bg-white bg-opacity-80': isDark
      })}
    >
      <div className="flex justify-between flex-1 items-center">
        <Link href="/" onClick={() => setMenuOpen(false)} className="mr-6">
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
        {
          <div className={'flex gap-7 hidden md:block'}>
            <MenuLinks
              menuContent={menuContent}
              setMenuOpen={setMenuOpen}
              isDark={isDark}
            />
          </div>
        }
        <div className="hidden md:block">
          <LanguageSelector isDark={isDark}/>
        </div>
        <button
          className="flex items-center block md:hidden"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <HamburgerMenu className={classNames("h-6 w-6", {'fill-white': !isDark, 'fill-primary': isDark})} />
        </button>
      </div>
        <div
          className={classNames({
            hidden: !isMenuOpen
          })}
        >
          <MenuLinks
            menuContent={menuContent}
            setMenuOpen={setMenuOpen}
            isDark={isDark}
            classes={'md:hidden flex flex-col mt-4'}
          />
        </div>
        <div className={classNames('md:hidden mt-2', { hidden: !isMenuOpen })}>
          <LanguageSelector isDark={isDark}/>
        </div>
    </nav>
  )
}
