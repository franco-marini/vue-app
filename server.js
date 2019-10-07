const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const serialize = require('serialize-javascript')
const port = process.env.PORT || 3000
const { createBundleRenderer } = require('vue-server-renderer')
let renderer

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

app.use('/dist', express.static(path.resolve(__dirname, './dist')))

require('./build/dev-server')(app, bundle => {
  renderer = createBundleRenderer(bundle)
})

app.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    html = indexHTML.replace('{{ APP }}', html)
    html = html.replace(
      '{{ STATE }}',
      `<script>window.__INITIAL_STATE_=${serialize(context.initialState, { isJSON: true })}</script>`)
    res.write(html)
    res.end()
  })
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
