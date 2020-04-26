// mailer configuration for using mailtrap
const nodemailer = require('nodemailer')

console.log(process.env.MAILER_PASS)

module.exports = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
});