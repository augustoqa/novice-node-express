// Express application
import express from 'express'

import { fileURLToPath } from 'url'
import { dirname, sep } from 'path'

// configuration
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep,
  cfg = {
    port: process.env.PORT || 4000,
    dir: {
      root: __dirname,
      static: __dirname + 'static' + sep,
    },
  }

console.dir(cfg, { depth: null, color: true })

// Express initiation
const app = express()

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

// home page route
app.get('/', (req, res) => {
  res.end('Hello World!')
})

// another route
app.get('/hello/', (req, res) => {
  res.send('Hello again!')
})

// serve static assets
app.use(express.static('static'))

// start server
app.listen(cfg.port, () => {
  console.log(`Example app listening on port ${cfg.port}`)
})

// export defaults
export { cfg, app }
