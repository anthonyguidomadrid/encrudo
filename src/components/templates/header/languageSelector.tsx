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
    <div className={classNames('flex', { 'text-primary': isDark })}>
      {locales?.map((locale, idx) => {
        const isLast = idx + 1 === locales.length
        return (
          <button
            key={idx}
            className={classNames('uppercase', {
              'pl-2': isLast,
              'border-r pr-2': !isLast,
              'border-primary': isDark
            })}
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
