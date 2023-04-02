import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'

import { Logo, MenuItem } from '../layout'

import HamburgerMenu from '@icons/bonelli-mobile.svg'

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

  const MenuLinks = menuContent?.map((item, idx) => {
    return (
      <Link
        data-testid="scroll-link"
        key={idx}
        className="my-2 md:mx-2 md:my-0"
        href={item?.link ?? ''}
        onClick={() => setMenuOpen(false)}
      >
        {item?.name}
      </Link>
    )
  })

  const LanguageSelector = <p>ES | EN</p>

  return (
    <nav
      className={classNames('fixed top-0 w-full z-50 text-white p-5', {
        'bg-white bg-opacity-80 text-black': ispageScrolled || isMenuOpen
      })}
    >
      <div className="flex justify-between flex-1">
        <Link href="/" onClick={() => setMenuOpen(false)} className="mr-6">
          <Image
            src={
              ispageScrolled || isMenuOpen
                ? logoDark?.url ?? ''
                : logoLight?.url ?? ''
            }
            alt={
              ispageScrolled
                ? logoDark?.description ?? ''
                : logoLight?.description ?? ''
            }
            className="h-7"
            width="100"
            height="28"
          />
        </Link>
        {<div className={'flex gap-7 hidden md:block'}>{MenuLinks}</div>}
        <div className="hidden md:block">{LanguageSelector}</div>
        <button
          className="flex items-center block md:hidden"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <HamburgerMenu className="h-4 w-4" />
        </button>
      </div>
      <div
        className={classNames('md:hidden flex flex-col mt-4', {
          hidden: !isMenuOpen
        })}
      >
        {MenuLinks}
      </div>
      <div className={classNames('md:hidden mt-2', { hidden: !isMenuOpen })}>
        {LanguageSelector}
      </div>
    </nav>
  )
}
