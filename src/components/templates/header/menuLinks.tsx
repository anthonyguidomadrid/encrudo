import classNames from 'classnames'
import Link from 'next/link'

import { MenuItem } from '../layout'

export type MenuLinksProps = {
  menuContent?: MenuItem[]
  setMenuOpen?: (boolean) => void
  isDark: boolean
  classes?: string
}

export const MenuLinks = ({
  menuContent,
  setMenuOpen,
  isDark,
  classes
}: MenuLinksProps) => {
  if (menuContent) {
    return (
      <div className={classes}>
        {menuContent.map((item, idx) => {
          return (
            <Link
              key={idx}
              className={classNames('my-2 md:mx-2 md:my-0', {
                'text-black': isDark
              })}
              href={item?.link ?? ''}
              onClick={() => setMenuOpen && setMenuOpen(false)}
            >
              {item?.name}
            </Link>
          )
        })}
      </div>
    )
  }
  return null
}
