import twilio from 'twilio';

const twilioPhoneNumber = process.env.TWILIO_NUMBER;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const twilioClient = twilio(accountSid, authToken);

function sendMessage(message, phoneNumber) {
  return twilioClient.messages.create({
    body: message,
    from: twilioPhoneNumber,
    to: phoneNumber,
  });
}

export { sendMessage };
