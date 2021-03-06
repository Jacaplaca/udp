require('dotenv').config()
const oAuthToken = process.env.SMSAPI_TOKEN;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;
const sms = require('smsapi');
const { SMSAPI } = sms;

const smsapi = new SMSAPI(oAuthToken);

const details = {
  from: "ECO",
  normalize: true
};

const sendSMS = async (content) => {
  return await smsapi.sms.sendSms(myPhoneNumber, String(content), details);
};

module.exports = sendSMS






