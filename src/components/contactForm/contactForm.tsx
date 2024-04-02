import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import * as gtag from '../../helpers/gtag'

import ErrorIcon from '@icons/error.svg'
import SuccessIcon from '@icons/success.svg'

type ContactFormProps = {
  isSuccess: boolean
  setIsSuccess: (param: boolean) => void
}

export const ContactForm = ({ isSuccess, setIsSuccess }: ContactFormProps) => {
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [captchaValue, setCaptchaValue] = useState({
    callback: 'not fired',
    value: '[empty]',
    load: false,
    expired: 'false',
    recaptchaLoaded: false
  })
  const { t } = useTranslation()

  const status = isSuccess ? 'success' : 'error'

  const inputClass = 'border-b pt-10 outline-none'

  const recaptchaRef = useRef({ execute: () => undefined })

  async function handleSubmit(event: any) {
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value
    }

    gtag.event('form_contact', data)
    event.preventDefault()
    await recaptchaRef.current?.execute()
    setLoading(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setLoading(false)
      setIsSuccess(true)
    }
    if (!response.ok) {
      setLoading(false)
      setIsError(true)
    }
  }

  const asyncScriptOnLoad = () => {
    setCaptchaValue(prev => {
      return { ...prev, callback: 'called!', recaptchaLoaded: true }
    })
  }

  const handleCaptchaChange = value => {
    setCaptchaValue(prev => {
      return { ...prev, value }
    })
    if (value === null)
      setCaptchaValue(prev => {
        return { ...prev, expired: 'true' }
      })
  }

  return isSuccess || isError ? (
    <div className="text-center max-w-2xl mx-auto py-48 px-10 sm:px-0 flex flex-col items-center gap-5">
      {isSuccess ? (
        <SuccessIcon className="h-10 w-fit" />
      ) : (
        <ErrorIcon className="h-10 w-fit" />
      )}
      <p>{t(`form.result.${status}`)}</p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-2xl mx-auto py-20 px-10 sm:px-0"
    >
      <input
        type="text"
        name="name"
        placeholder={t('form.fields.name')}
        className={inputClass}
        maxLength={150}
        disabled={loading}
        required
      />

      <input
        type="email"
        name="email"
        placeholder={t('form.fields.email')}
        className={inputClass}
        maxLength={150}
        disabled={loading}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder={t('form.fields.phone')}
        className={inputClass}
        pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9]*$"
        maxLength={150}
        disabled={loading}
        required
      />
      <textarea
        name="message"
        placeholder={t('form.fields.message')}
        className={`${inputClass} h-48`}
        title={t('form.validation.message')}
        maxLength={500}
        disabled={loading}
        required
      />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
        onChange={handleCaptchaChange}
        size="invisible"
        ref={recaptchaRef}
        asyncScriptOnLoad={asyncScriptOnLoad}
      />
      <p className="pt-5 text-sm">
        {t('form.gdpr.start')}{' '}
        <Link href={'/proteccion-datos'}>{t('footer.privacy')}</Link>{' '}
        {t('form.gdpr.between')}{' '}
        <Link href={'/aviso-legal'}>{t('footer.legal')}</Link>
      </p>
      <button
        type="submit"
        disabled={loading || !captchaValue.recaptchaLoaded}
        className="mt-10 uppercase mx-auto w-fit px-5 py-2 border border-primary hover:border-grey-light hover:text-grey-light"
      >
        {t('form.fields.button')}
      </button>
    </form>
  )
}
