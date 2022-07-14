// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const winston = require('winston');

// Get our API routes


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'nyundoo_front-end')));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'nyundoo_front-end/index.html'));
});

/**
 * Listen on provided port, on all network interfaces.
 */

 const port = process.env.PORT || 4000;
 const server = app.listen(port, () => winston.info(`Listening to requests on port ${port}...`));







 