const { foo } = require('@infras/shared/utils');
const { sum } = require('@infras/rs');

console.log('Node.js foo:', foo);
console.log('Node.js call rs \`sum\`:', sum(1, 1));
