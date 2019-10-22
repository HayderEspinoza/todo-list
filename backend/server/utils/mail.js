const nodemailer = require('nodemailer');
const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_SECURE,
  APP_NAME
} = process.env;

// Mailtrap
const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: MAIL_SECURE,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD
  }
});

async function send(data) {
  const { subject, html, to, text } = data;
  let mailOptions = {
    from: `"${APP_NAME} 📅" <${MAIL_USER}>`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text ? text : APP_NAME,
    html: html
  };
  // send mail with defined transport object
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) reject({ error: error });
      resolve({ info });
    });
  });
}

module.exports = {
  send
};
