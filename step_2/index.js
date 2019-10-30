const getter = require('./getter');

console.log(`
problem 2: now it looks much better - we hold a reference to a getter
---------------------------------------------------------------------
but what if we want to iterate through the data?
* thinks *
...
of course we need to fetch the whole damn thing first

\`\`\`js
for (const item in getter()) {
  console.log('item: ', item)
}
\`\`\`
---------------------------------------------------------------------
`);

console.log('the getter reference: ', getter);
console.log('we still have access to the data: ', getter());

// Iteration example:
// for (const item in getter.get()) {
//   console.log('item: ', item)
// }
