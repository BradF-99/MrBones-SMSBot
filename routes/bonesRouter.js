require('dotenv').config();

const express = require('express');
const router = express.Router();

const axios = require('axios');
const randomUseragent = require('random-useragent');
const twimlModule = require('../modules/twimlModule');

router.post('/', async (req, res, next) => {
    try {
        res.setHeader('Content-Type', 'text/xml');
        res.statusCode = 200;
        const response = await getMrBones(req.body.Body);
        if (response || response !== ""){
            const twiml = await twimlModule.textToTwiml(response);
            return res.end(twiml);
        } else {
            next(e);
        }
    } catch (e) {
        next(e);
    }
});

async function getMrBones(query){
    const encodedQuery = encodeURI(query);
    const userAgent = randomUseragent.getRandom();
    const response = await axios.get(process.env.MRBONESAPIURL + encodedQuery, {headers: {'User-Agent': userAgent}});
    return response.data.reply;
}

module.exports = router;