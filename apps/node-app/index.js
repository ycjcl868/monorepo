const { sum, fibonacci } = require('@infras/shared/utils');
const { sum: rsSum, fibonacci: rsFibonacci } = require('@infras/native');
const { Component } = require('@infras/ui/react');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

console.time("Node.js sum time");
console.log('Node.js \`sum(1, 1)\`:', sum(1, 1));
console.timeEnd("Node.js sum time");
console.time("Rust sum time");
console.log('Rust \`sum(1, 1)\`:', rsSum(1, 1));
console.timeEnd("Rust sum time");

console.time("Node.js fibonacci time");
console.log('Node.js \`fibonacci(50)\`:', fibonacci(10));
console.timeEnd("Node.js fibonacci time");
console.time("Rust fibonacci time");
console.log('Rust \`fibonacci(50)\`:', rsFibonacci(10));
console.timeEnd("Rust fibonacci time");

console.log('SSR: ', ReactDOMServer.renderToString(React.createElement(Component)));
