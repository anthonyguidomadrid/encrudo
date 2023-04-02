export type LanguageSelectorProps = {
  isDark: boolean
}

export const LanguageSelector = ({ isDark }: LanguageSelectorProps) => {
  return <p className={isDark ? 'text-black' : ''}>ES | EN</p>
}
