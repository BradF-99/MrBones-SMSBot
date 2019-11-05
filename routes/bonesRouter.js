require('dotenv').config();

const express = require('express');
const axios = require('axios');
const router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

router.post('/', async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/xml');
        res.statusCode = 200;
        const response = await getMrBones(req.body.Body);
        const twiml = await textToTwiml(response);
        return res.end(twiml);
    } catch (e) {
        res.send(e);
    }
  
});

async function getMrBones(query){
    const encodedQuery = encodeURI(query);
    const response = await axios.get(process.env.MRBONESAPIURL + encodedQuery);
    return response.data.reply;
}

async function textToTwiml(msg){
    const twiml = new MessagingResponse();
    twiml.message(msg);
    return twiml.toString();
}

module.exports = router;