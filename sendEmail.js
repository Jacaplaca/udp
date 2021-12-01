require('dotenv').config()
const emailAddress = process.env.FORMEMAILADDRESS;
const emailPass = process.env.FORMEMAILPASS;
const emailToReceive = process.env.EMAILTORECEIVE;
const appName = process.env.NEXT_PUBLIC_APPNAME;
const formEmailHost = process.env.FORMEMAILHOST;

let nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: formEmailHost,
  auth: {
    user: emailAddress,
    pass: emailPass,
  },
  secure: true,
});

const sendEmail = (content) => {
    const mailData = {
        from: emailAddress,
        to: emailToReceive,
        subject: `udp`,
        text: content,
        html: `<div>${content}</div>`,
      };
    
      transporter.sendMail(mailData, (err, info) => {
          console.log(emailAddress, emailToReceive, emailPass);
        if (err) {
          console.log("sendMailError", err);
        } else console.log("sendMailOk", info);
      });
    
}

module.exports = sendEmail;
  
