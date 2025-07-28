import nodemailer from 'nodemailer';
const handler = async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASS,
    },
  });

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

      `,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};

export default handler;