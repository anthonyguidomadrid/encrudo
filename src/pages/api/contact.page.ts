import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type ContactBody = {
  name: string
  email: string
  message: string
  phone: string
  recaptchaToken?: string
}

type RecaptchaVerifyResponse = {
  success: boolean
  challenge_ts?: string
  hostname?: string
  score?: number
  action?: string
  'error-codes'?: string[]
}

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

const parseSmtpPort = (value: string | undefined) => {
  if (!value) return undefined
  const parsed = Number.parseInt(value, 10)
  return Number.isFinite(parsed) ? parsed : undefined
}

const parseBool = (value: string | undefined) => {
  if (!value) return undefined
  const normalized = value.trim().toLowerCase()
  if (['1', 'true', 'yes', 'y', 'on'].includes(normalized)) return true
  if (['0', 'false', 'no', 'n', 'off'].includes(normalized)) return false
  return undefined
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, email, message, phone, recaptchaToken } =
    req.body as ContactBody

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
  if (!recaptchaSecret) {
    return res.status(500).json({ error: 'Missing RECAPTCHA_SECRET_KEY' })
  }
  if (!recaptchaToken) {
    return res.status(400).json({ error: 'Missing recaptchaToken' })
  }

  try {
    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken
        })
      }
    )

    const verifyJson = (await verifyRes.json()) as RecaptchaVerifyResponse
    if (!verifyJson.success) {
      return res.status(400).json({ error: 'Recaptcha verification failed' })
    }
  } catch {
    return res.status(502).json({ error: 'Recaptcha verification unavailable' })
  }

  const smtpHost = process.env.SMTP_HOST ?? 'smtp.sendgrid.net'
  const smtpPort =
    parseSmtpPort(process.env.SMTP_PORT) ??
    (process.env.SMTP_SECURE ? 465 : 587)
  const smtpSecure = parseBool(process.env.SMTP_SECURE) ?? smtpPort === 465
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  const emailRecipient = process.env.EMAIL_RECIPIENT
  const emailFrom = process.env.EMAIL_FROM

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({ error: 'Missing SMTP credentials' })
  }
  if (!emailRecipient) {
    return res.status(500).json({ error: 'Missing EMAIL_RECIPIENT' })
  }
  if (!emailFrom) {
    return res.status(500).json({ error: 'Missing EMAIL_FROM' })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  })

  try {
    await transporter.sendMail({
      from: emailFrom,
      to: emailRecipient,
      replyTo: email,
      subject: `Has recibido un nuevo mensaje de ${name}`,
      html: `<p><strong>Nombre: </strong> ${escapeHtml(name)} </p>
      <p><strong>Teléfono: </strong> ${escapeHtml(phone ?? '')} </p>
      <p><strong>Email: </strong> ${escapeHtml(email)} </p>
      <p><strong>Mensaje: </strong> ${escapeHtml(message)} </p>

      `
    })
  } catch {
    return res.status(500).json({ error: 'Failed to send email' })
  }

  return res.status(200).json({ ok: true })
}

export default handler
