require('dotenv').config();

const express = require('express');
const router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

router.post('/', async (req, res) => {
    const twiml = new MessagingResponse();
    try {
        twiml.message('Test response!');

        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    } catch (e) {
        next(e);
    }
  
});

module.exports = router;