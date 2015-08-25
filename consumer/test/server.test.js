'use strict';

var http = require('http');
var assert = require('assert');

var consumer = require('../consumer');
var evaluator = require('../evaluator');

describe('Consumer', function() {
  describe('evaluator', function() {
    it('should resolve negative numbers', function() {
      var equation = '-3+3=';
      var result = evaluator(equation);
      assert.equal(result, 0);
    });
    it('should perform on positive numbers', function() {
      var equation = '3+3=';
      var result = evaluator(equation);
      assert.equal(result, 6);
    });
    it('should support substraction', function() {
      var equation = '3-3=';
      var result = evaluator(equation);
      assert.equal(result, 0);
    });
    it('should support negative numbers', function() {
      var equation = '-3-3=';
      var result = evaluator(equation);
      assert.equal(result, -6);
    });
  });
  describe('server', function() {
    describe('POST /', function() {
      var options;
      beforeEach(function(done) {
        options = {
          port: 3000,
          path: '/',
          method: 'POST'
        };
        consumer.listen(3000, done);
      });
      afterEach(function(done) {
        consumer.close(done);
      });
      it('should return 405 on non POST requests', function(done) {
        options.method = 'GET';
        http.request(options, function(res) {
          assert.equal(res.statusCode, 405);
          done();
        }).end();
      });
      it('should return 400 on empty body', function(done) {
        http.request(options, function(res) {
          assert.equal(res.statusCode, 400);
          done();
        }).end();
      });
      it('should return 400 on invalid body', function(done) {
        var req = http.request(options, function(res) {
          assert.equal(res.statusCode, 400);
          done();
        });

        req.write('3+a=');
        req.end();
      });
      it('should return 200 & correct result in body', function(done) {
        var req = http.request(options, function(res) {
          assert.equal(res.statusCode, 200);
          var result = '';
          res.on('data', function(data) {
            result += data;
          });
          res.on('end', function() {
            assert.equal(result, 4);
          });
          done();
        });
        req.write('2+2=');
        req.end();
      });
    });
  });
});
