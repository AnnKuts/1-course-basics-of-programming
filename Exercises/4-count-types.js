/*eslint-disable*/
'use strict';

const countTypesInArray = (arr) => {
  const counters = {};
  for (const element of arr) {
    counters[typeof element] = counters[typeof element] ? ++counters[typeof element] : 1;
  }
  return counters;
};

module.exports = { countTypesInArray };
