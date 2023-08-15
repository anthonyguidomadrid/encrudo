'use client'

import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import ErrorIcon from '@icons/error.svg'
import SuccessIcon from '@icons/success.svg'

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const { t } = useTranslation()

  const status = isSuccess ? 'success' : 'error'

  const inputClass = 'border-b pt-10 outline-none'

  async function handleSubmit(event: any) {
    event.preventDefault()
    setLoading(true)

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value
    }

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
        pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
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
      <button
        type="submit"
        disabled={loading}
        className="mt-10 uppercase mx-auto w-fit px-5 py-2 border border-primary hover:border-grey-light hover:text-grey-light"
      >
        {t('form.fields.button')}
      </button>
    </form>
  )
}
