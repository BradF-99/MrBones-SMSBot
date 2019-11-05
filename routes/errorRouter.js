require('dotenv').config();

const express = require('express');
const router = express.Router();

const axios = require('axios');
const twimlModule = require('../modules/twimlModule');

router.post('/', async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/xml');
        res.statusCode = 200;
        const twiml = await twimlModule.textToTwiml("Mr Bones is busy and didn't respond. Try again later.");
        return res.end(twiml);
    } catch (e) {
        res.send(e);
    }
});

router.get('/', async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/xml');
        res.statusCode = 200;
        const twiml = await twimlModule.textToTwiml("Mr Bones is busy and didn't respond. Try again later.");
        return res.end(twiml);
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;