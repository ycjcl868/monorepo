const { sum } = require('@infras/shared/utils');
const { sum: rsSum } = require('@infras/native');
const { Component } = require('@infras/ui/react');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

console.time("Node.js time");
console.log('Node.js \`sum(1, 1)\`:', sum(1, 1));
console.timeEnd("Node.js time");
console.time("Rust time");
console.log('Rust \`sum(1, 1)\`:', rsSum(1, 1));
console.timeEnd("Rust time");

console.log('SSR: ', ReactDOMServer.renderToString(React.createElement(Component)));
