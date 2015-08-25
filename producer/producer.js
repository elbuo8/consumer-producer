'use strict';

function randomNumberFromRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function generateRandomNumbers(len) {
  if (!len) {
    len = 2;
  }
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(randomNumberFromRange(Math.pow(10, 10), 0));
  }
  return arr;
}

function addition(len) {
  var numbers = generateRandomNumbers(len);
  return numbers.join('+') + '=';
}

function subtraction(len) {
  var numbers = generateRandomNumbers(len);
  return numbers.join('-') + '=';
}

function additionAndSubtraction (len) {
  var numbers = generateRandomNumbers(len);
  var operators = ['+', '-'];
  var result = '';

  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i] + operators[randomNumberFromRange(0, 1)];
  }

  return result.substring(0, result.length -1 ) + '=';
}

module.exports = {
  addition: addition,
  subtraction: subtraction,
  additionAndSubtraction: additionAndSubtraction
};
