import nodemailer from "nodemailer";

export async function sendEmail(email: string, body: string, subject: string, from?: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST!,
    port: parseInt(process.env.EMAIL_PORT!),
    secure: process.env.EMAIL_SECURE!=null&&process.env.EMAIL_SECURE==='true'?true:false,
    auth: {
      user: process.env.EMAIL_ADDRESS!,
      pass: process.env.EMAIL_PASSWORD!,
    },
  });

  await transporter.sendMail({
    from: `${from??'"Patrick Conrad" <patrickoconrad@gmail.com>'}`,
    to: email,
    subject: subject,
    html: body,
  });
}
