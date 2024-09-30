'use strict';

const fn = () => {
  //eslint-disable-next-line
  console.log({ a });
  //eslint-disable-next-line
  var a = 20;
};
fn();
//value is undefined because var is hoisting
module.exports = { fn };
