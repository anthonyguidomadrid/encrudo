import { useTranslation } from 'next-i18next'

import ArrowDown from '@icons/arrow-down.svg'

export type NewsletterFormProps = {
  status: string | null
  onValidated: ({ EMAIL }: { EMAIL: string }) => void
}

export const NewsletterForm = ({
  status,
  onValidated
}: NewsletterFormProps) => {
  const { t } = useTranslation()
  let email: HTMLInputElement | null = null
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value
    })

  return (
    <div className="flex items-center">
      {status && (
        <div className="font-semibold mr-2">{t(`newsletter.${status}`)}</div>
      )}
      {(!status || status === 'error') && (
        <>
          <input
            className="border-t border-b border-l border-gray-300 px-4 py-2 outline-none w-72"
            ref={node => {
              email = node
            }}
            type="email"
            placeholder={t('newsletter.placeholder')}
          />
          <br />
          <button
            className="border-t border-b border-r border-gray-300 font-bold py-2 px-4"
            onClick={submit}
          >
            <ArrowDown className="h-6 w-6 p-1 fill-grey-dark" />
          </button>
        </>
      )}
    </div>
  )
}
