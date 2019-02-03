const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const next = require('next');

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
];

const app = next({ dev: false, dir: './src' });
const handle = app.getRequestHandler();

const server = express();

server.use('/_next', express.static(path.join(__dirname, '.next')));
server.get('/', (req, res) => app.render(req, res, '/'));

server.get('*', (req, res) => handle(req, res));

export default serverless(server, {
  binary: binaryMimeTypes,
});
