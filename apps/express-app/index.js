const express = require('express');
const { sum } = require('@infras/shared/utils');
const { sum: rsSum } = require('@infras/native');
const { Component } = require('@infras/ui/react');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const app = express();
app.use('/', (_req, res) => {
  let resp = '';

  resp += `<div>Node.js \`sum(1, 1)\`: ${sum(1, 1)}</div>`;
  resp += `<div>Rust \`sum(1, 1)\`: ${rsSum(1, 1)}</div>`
  resp += `<div>SSR: ${ReactDOMServer.renderToString(React.createElement(Component))}</div>`

  res.send(`
    <html>
      <body>
        ${resp}
      </body>
    </html>
  `);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server in running in port ${PORT}`));
