const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const next = require('next');

const binaryMimeTypes = require('./binaryMimeTypes');

const app = next({ dev: false, dir: './src' });
const handle = app.getRequestHandler();

const server = express();

server.use('/_next', express.static(path.join(__dirname, '.next')));
server.get('/', (req, res) => app.render(req, res, '/'));

server.get('*', (req, res) => handle(req, res));


module.exports.default = serverless(server, {
  binary: binaryMimeTypes,
});
