const getGetter = require('./getGetter');

console.log(`
problem 3: so, this time we're holding an object reference
----------------------------------------------------------
+ it's easy to iterate without fetching the whole array
+ we hold one item at most in the context
- we cannot really know when to stop - f***!!

\`\`\`js
let item;
while ((item = getter()) !== undefined) {
  console.log('item: ', item)
}
\`\`\`
----------------------------------------------------------
`);

console.log('the getGetter reference: ', getGetter);

const getter = getGetter();
console.log('the getter reference: ', getter);

// Iteration example, one item at a time:
// let item;
// while ((item = getter()) !== undefined) {
//   console.log('item: ', item)
// }
