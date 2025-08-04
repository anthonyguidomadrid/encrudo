import classNames from 'classnames'
import { useRouter } from 'next/router'

export type LanguageSelectorProps = {
  isDark?: boolean
  onClick?: () => void
}

export const LanguageSelector = ({
  isDark = true,
  onClick
}: LanguageSelectorProps) => {
  const { locales } = useRouter()
  const router = useRouter()

  const changeLocale = (value: string) => {
    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      {
        locale: String(value)
      }
    )
  }

  return (
    <div className={classNames('flex p-3', { 'text-primary': isDark })}>
      {locales?.map((locale, idx) => {
        return (
          <button
            key={idx}
            className={classNames(
              'uppercase border-r pr-2 last:pl-2 last:border-0 last:pr-0 hover:opacity-70',
              {
                'border-primary': isDark
              }
            )}
            onClick={() => {
              changeLocale(locale)
              onClick && onClick()
            }}
          >
            {locale}
          </button>
        )
      })}
    </div>
  )
}
