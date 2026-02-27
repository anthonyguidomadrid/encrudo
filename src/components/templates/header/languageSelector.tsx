import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type LanguageSelectorProps = {
  isDark?: boolean
  onClick?: () => void
}

export const LanguageSelector = ({
  isDark = true,
  onClick
}: LanguageSelectorProps) => {
  const router = useRouter()
  const { locales, locale: activeLocale, asPath } = router

  return (
    <div className={classNames('flex p-3', { 'text-primary': isDark })}>
      {locales?.map((locale, idx) => {
        const isActive = locale === activeLocale
        return (
          <Link
            key={idx}
            className={classNames(
              'uppercase border-r pr-2 last:pl-2 last:border-0 last:pr-0 hover:opacity-70 cursor-pointer no-underline',
              {
                'border-primary': isDark,
                'opacity-60 pointer-events-none': isActive
              }
            )}
            href={asPath || '/'}
            locale={locale}
            hrefLang={locale}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onClick && onClick()}
          >
            {locale}
          </Link>
        )
      })}
    </div>
  )
}
