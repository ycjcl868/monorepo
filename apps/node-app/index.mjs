import { sum, fibonacci } from '@infras/shared/utils';
import { sum as rsSum, fibonacci as rsFibonacci } from '@infras/native';

console.log('=====ESM Call=====')
console.time("Node.js time");
console.log('Node.js \`sum(1, 1)\`:', sum(1, 1));
console.timeEnd("Node.js time");
console.time("Rust time");
console.log('Rust \`sum(1, 1)\`:', rsSum(1, 1));
console.timeEnd("Rust time");

console.time("Node.js fibonacci time");
console.log('Node.js \`fibonacci(50)\`:', fibonacci(10));
console.timeEnd("Node.js fibonacci time");
console.time("Rust fibonacci time");
console.log('Rust \`fibonacci(50)\`:', rsFibonacci(10));
console.timeEnd("Rust fibonacci time")
