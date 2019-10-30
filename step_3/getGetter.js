const data = require('../data');

// We use a getter to reach a getter to reach part of our data
// This is the first time we don't have direct access to the array!
// ----------------------------------------------------------------

module.exports = /* get: */ () => {
  let iterator = 0;

  // wanna trick the "iterator"? use this:
  // return /* getter: */ () => data[iterator++] || 0

  return /* getter: */ () => data[iterator++]
};
