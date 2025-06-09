const nodemailer = require("nodemailer");

const sendEmail = async (applicationDetails) => {
  try {
    const transporter = nodemailer.createTransport({
        host: "smtp.beget.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Формируем текст письма
    let emailText = `Новая заявка от ${applicationDetails.firstName}\n`;
    emailText += `Телефон пользователя: ${applicationDetails.phone}\n`;
    emailText += `Почта пользователя: ${applicationDetails.email}\n`;
    emailText += `Комментарий: ${applicationDetails.comment}\n\n`;


    const info = await transporter.sendMail({
      from: `"Ibra" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Отправляем письмо себе (админу)
      subject: `Новая заявка от ${applicationDetails.firstName}`,
      text: emailText,
    });

    console.log("application notification sent:", info.messageId);
  } catch (error) {
        console.error("Error sending application notification:", error);
  }
};

module.exports = { sendEmail }