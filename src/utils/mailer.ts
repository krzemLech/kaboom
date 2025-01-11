import nodemailer from "nodemailer";

interface EmailMessage {
  name: string;
  email: string;
  message: string;
}

export const sendNotificationEmail = async (data: EmailMessage) => {
  const { name, email, message } = data;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.NOTIFICATION_EMAIL,
    subject: `COMPANY website message from ${name}`,
    html: `
      <h2>New message from your COMAPANY contact form</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send email notification:", error);
    throw error;
  }
};
