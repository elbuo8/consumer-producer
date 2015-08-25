'use strict';

var assert = require('assert');

var producer = require('../producer');

describe('Producer', function() {
  describe('#addition', function() {
    it('should generate a basic addition', function() {
      var equation = producer.addition();
      assert.equal(equation.slice(-1), '=');
      assert.equal(equation.split('+').length, 2);
    });
    it('should generate an equation with specified # of operands', function() {
      var equation = producer.addition(10);
      assert.equal(equation.slice(-1), '=');
      assert.equal(equation.split('+').length, 10);
    });
  });
  describe('#subtraction', function() {
    it('should generate a basic subtraction', function() {
      var equation = producer.subtraction();
      assert.equal(equation.slice(-1), '=');
      assert.equal(equation.split('-').length, 2);
    });
    it('should generate an equation with specified # of operands', function() {
      var equation = producer.subtraction(10);
      assert.equal(equation.slice(-1), '=');
      assert.equal(equation.split('-').length, 10);
    });
  });
  describe('#additionAndSubtraction', function() {
   it('should generate a basic equation', function() {
      var equation = producer.additionAndSubtraction();
      assert.equal(equation.slice(-1), '=');
      var numbers = equation.replace(/[+-]/g, ' ').split(' ');
      assert.equal(numbers.length, 2);
   });
    it('should generate an equation with specified # of operands', function() {
      var equation = producer.additionAndSubtraction(10);
      assert.equal(equation.slice(-1), '=');
      var numbers = equation.replace(/[+-]/g, ' ').split(' ');
      assert.equal(numbers.length, 10);
    });
  });
});
