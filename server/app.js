import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
// import fs from 'fs';

require('ignore-styles');

const app = express();
const universalLoader = require('./universal');

// Support Gzip
app.use(compression());

// Suport post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup logger
app.use(morgan('dev'));

// Set Pugjs as view engine
app.set('views', (path.resolve(__dirname, 'views')));
app.set('view engine', 'pug');


// Serve static assets
app.use('/static', express.static(path.resolve(__dirname, '..', 'build/static')));
app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.use('/', universalLoader);

// start other routing here
// app.use('/api', apiRoute)

module.exports = app;
