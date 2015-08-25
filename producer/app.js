'use strict';

var http = require('http');

var producer = require('./producer');

var httpOptions = {
  host: process.env.host,
  port: process.env.port || 3000,
  path: '/',
  method: 'POST'
};

setInterval(function() {

  var equation = producer.additionAndSubtraction(5);
  console.log('Generated equation:', equation);

  var req = http.request(httpOptions, function(res) {
    var result = '';
    res.on('data', function(data) {
      result += data;
    });

    res.on('end', function() {
      console.log('Solution received:', equation + result);
    });
  });

  req.write(equation);
  req.end();
}, 10);
