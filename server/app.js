require('ignore-styles')

import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';

const app = express()

// Support Gzip
app.use(compression())

// Suport post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', (path.resolve(__dirname, 'views'))); // (path.resolve(__dirname, '/', 'views'))
app.set('view engine', 'pug');

// Setup logger
app.use(morgan('dev'))

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

// Always return the main index.html, so react-router render the route in the client
const universalLoader = require('./universal')
app.use('/', universalLoader)

module.exports = app
