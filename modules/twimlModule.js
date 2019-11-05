const MessagingResponse = require('twilio').twiml.MessagingResponse;

async function textToTwiml(msg) {
    const twiml = new MessagingResponse();
    twiml.message(msg);
    return twiml.toString();
}

module.exports = {
    textToTwiml: textToTwiml
}