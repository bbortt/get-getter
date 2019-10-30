const data = require('../data');

// An extended getGetter.. does it look familiar?
// ----------------------------------------------

module.exports = /* getGetter: */ () => {
  let iterator = 0;

  return /* getter: */ {
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
};
