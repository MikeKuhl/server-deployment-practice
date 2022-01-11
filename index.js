'use strict';

const server = require('./app.js');

const PORT = process.env.PORT || 3001;
server.start(PORT);
