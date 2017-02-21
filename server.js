'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);

  console.log('request url:', req.url);
  if (req.method === 'GET' && req.url.pathname === '/cowsay') {
    res.write(cowsay.say({ text: 'hi there!'}));
    res.end();
  };
  
  res.end();
});


server.listen(PORT, function() {
  console.log('server up:', PORT);
})
