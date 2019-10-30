const data = require('../data');

// The [Symbol.iterator] is required in order to create a "real" iterator
// ----------------------------------------------------------------------

module.exports = /* getIterator: */ () => {
  let iterator = 0;

  return {
    [Symbol.iterator]: () => {
      return {
        next: () => {
          if (iterator < data.length) {
            return {
              value: data[iterator++],
              done: false
            };
          }
          return {
            done: true
          };
        }
      }
    }
  }
};
