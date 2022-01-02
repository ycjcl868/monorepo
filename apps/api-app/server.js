const express = require('express')
const next = require('next')

const { sum } = require('@infras/shared/utils');
const { sum: rsSum } = require('@infras/native');
const { Component } = require('@infras/ui/react');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  const server = express()

  server.get('/', (_, res) => {
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
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
