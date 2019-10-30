const getGetter = require('./getGetter');

console.log(`
problem 4: the perfect solution (is it?)
----------------------------------------
let's modify the getGetter just a little bit
it's much more safe because it knows when to stop by itself

\`\`\`js
let item;
while (!(item = getter.next()).done) {
  console.log('item: ', item.value);
}
\`\`\`

does this look familiar to you? ;) well, wait until \`step_5\`
----------------------------------------
`);

console.log('the getGetter reference: ', getGetter);

const getter = getGetter();
console.log('the getter reference: ', getter);

// Iteration example, one item at a time, stop-safe:
// let item;
// while (!(item = getter.next()).done) {
//   console.log('item: ', item.value);
// }
