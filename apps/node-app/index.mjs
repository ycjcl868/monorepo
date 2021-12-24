import { sum } from '@infras/shared/utils';
import { sum as rsSum } from '@infras/native';

console.log('=====ESM Call=====')
console.time("Node.js time");
console.log('Node.js \`sum(1, 1)\`:', sum(1, 1));
console.timeEnd("Node.js time");
console.time("Rust time");
console.log('Rust \`sum(1, 1)\`:', rsSum(1, 1));
console.timeEnd("Rust time");
