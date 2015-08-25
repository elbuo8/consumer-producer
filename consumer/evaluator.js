'use strict';

module.exports = function evaluate(exp) {
  /*
   * If we wanted to support more operations/operators,
   * the expression can be converted to postfix notation
   * and simplified into a result.
   */

  return exp.replace(/=/g, '').replace(/-/g, '+-').split('+').reduce(function(a, b) {
    return Number(a) + Number(b);
  });
};
