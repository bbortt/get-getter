const getIterator = require('./iterator');

console.log(`
problem 5: Using [Symbol.iterator] we can simplify the loop a lot!
------------------------------------------------------------------
It's the most beautiful way to iterator through data, one item at a time

\`\`\`js
for (const item of iterator) {
  console.log('item: ', item);
}
\`\`\`
------------------------------------------------------------------
`);

console.log('the getIterator reference: ', getIterator);

const iterator = getIterator();
console.log('even after fetching the iterator, it still is just a reference: ',
    iterator);

// Compact getIterator example:
// for (const item of iterator) {
//   console.log('item: ', item);
// }
