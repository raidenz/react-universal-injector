require('ignore-styles')

import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';

const app = express()
const universalLoader = require('./universal')

// Support Gzip
app.use(compression())

// Suport post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.set('views', (path.resolve(__dirname, 'views'))); // (path.resolve(__dirname, '/', 'views'))
app.set('view engine', 'pug');

// Setup logger

// Serve static assets
// app.use('/', universalLoader)

app.use('/static', express.static(path.resolve(__dirname, '..', 'build/static')))
app.use('/public', express.static(path.resolve(__dirname, 'public')))

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader)
// app.use('/', universalLoader)

module.exports = app
