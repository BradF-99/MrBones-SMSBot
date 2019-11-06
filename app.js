const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const bonesRouter = require('./routes/bonesRouter');
const errorRouter = require('./routes/errorRouter');

const twimlModule = require('./modules/twimlModule');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/bones', bonesRouter);
app.use('/error', errorRouter);

// error handler 
app.use(async (err, req, res, next) => {
    const twiml = await twimlModule.textToTwiml("Sorry, Mr Bones didn't respond. Try again later.");
    return res.end(twiml);
});
  

module.exports = app;
