require('dotenv').config();

const express = require('express');
const router = express.Router();

const axios = require('axios');
const twimlModule = require('../modules/twimlModule');

router.post('/', async (req, res, next) => {
    try {
        res.setHeader('Content-Type', 'text/xml');
        res.statusCode = 200;
        const response = await getMrBones(req.body.Body);
        if (response || response !== ""){
            const twiml = await twimlModule.textToTwiml(response);
        } else {
            next(e);
        }
        return res.end(twiml);
    } catch (e) {
        next(e);
    }
});

async function getMrBones(query){
    const encodedQuery = encodeURI(query);
    const response = await axios.get(process.env.MRBONESAPIURL + encodedQuery);
    return response.data.reply;
}

module.exports = router;