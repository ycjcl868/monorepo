const { sum } = require('@infras/shared/utils');
const { sum: rsSum } = require('@infras/native');

console.time("Node.js time");
console.log('Node.js \`sum(1, 1)\`:', sum(1, 1));
console.timeEnd("Node.js time");
console.time("Rust time");
console.log('Rust \`sum(1, 1)\`:', rsSum(1, 1));
console.timeEnd("Rust time");
