'use strict';

var http = require('http');
var evaluator = require('./evaluator');

var consumer = http.createServer(function(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405);
    return res.end();
  }

  var body = '';

  req.on('data', function(chunk) {
    body += chunk.toString();
  });

  req.on('end', function() {
    // Verify the body is not empty
    console.log('Received equation:', body);
    if (body.length === 0) {
      res.writeHead(400);
      return res.end();
    }

    // Simple validation for non operators
    if (/[^0-9+=\-]/g.test(body)) {
      res.writeHead(400);
      return res.end();
    }

    var result = evaluator(body);
    console.log('Sending answer:', result);
    res.writeHead(200);
    return res.end(String(result));
  });
});

module.exports = consumer;
