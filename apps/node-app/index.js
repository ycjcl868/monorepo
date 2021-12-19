const { AppType } = require('@infras/shared/types');
const { sum } = require('@infras/shared/utils');

console.log('Node.js AppType.Web:', AppType.Web);
console.log('Node.js \`sum(1, 1)\`:', sum(1, 1));
