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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, email, message, phone, recaptchaToken } =
    req.body as ContactBody

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

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECIPIENT,
      replyTo: email,
      subject: `Has recibido un nuevo mensaje de ${name}`,
      html: `<p><strong>Nombre: </strong> ${name} </p>
      <p><strong>Teléfono: </strong> ${phone} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Mensaje: </strong> ${message} </p>

      `
    })
  } catch {
    return res.status(500).json({ error: 'Failed to send email' })
  }

  return res.status(200).json({ ok: true })
}

export default handler
