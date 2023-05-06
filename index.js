// Express application
import express from 'express'
import compression from 'compression'

import { fileURLToPath } from 'url'
import { dirname, sep } from 'path'

// configuration
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep,
  cfg = {
    port: process.env.PORT || 4000,
    dir: {
      root: __dirname,
      static: __dirname + 'static' + sep,
      views: __dirname + 'views' + sep,
    },
  }

// Express initiation
const app = express()

// do not identify Express
app.disable('x-powered-by')

// HTTP compression
app.use(compression())

// use EJS templates
app.set('view engine', 'ejs')
app.set('views', cfg.dir.views)

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

// home page route
app.get('/', (req, res) => {
  res.render('message', { title: 'Hello World!' })
})

// /hello/ route
import { helloRouter } from './routes/hello.js'
app.use('/hello', helloRouter)

// serve static assets
app.use(express.static('static'))

// 404 error
app.use((req, res) => {
  res.status(404).render('message', { title: 'Not Found' })
})

// start server
app.listen(cfg.port, () => {
  console.log(`Example app listening on port ${cfg.port}`)
})

// export defaults
export { cfg, app }
