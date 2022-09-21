import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export class EmailSender {
  public sendEmail = async (email: string, newPassword: string) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
      tls: { ciphers: "SSLv3" },
    });

    await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "Test Nodemailer Message",
      text: "this is the tiny text",
      html: `<h1>Isso é um h1</h1><h2>isso é um h2</h2><p>isso é um p, sua nova senha é:${newPassword} </p>`,
    });
  };
}
