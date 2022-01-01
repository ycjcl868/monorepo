const { sum } = require('@infras/shared/utils');
const { sum: rsSum } = require('@infras/native');
const { Component } = require('@infras/ui/react');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

export default function handler(req, res) {
  let resp = '';

  resp += `<div>Node.js \`sum(1, 1)\`: ${sum(1, 1)}</div>`;
  resp += `<div>Rust \`sum(1, 1)\`: ${rsSum(1, 1)}</div>`
  resp += `<div>SSR: ${ReactDOMServer.renderToString(React.createElement(Component))}</div>`

  res.status(200).send(`
    <html>
      <body>
        ${resp}
      </body>
    </html>
  `);
}
