// Express application
import express from 'express'

// configuration
const cfg = { port: process.env.PORT || 4000 }

// Express initiation
const app = express()

// home page route
app.get('/', (req, res) => {
  res.end('Hello World!')
})

// another route
app.get('/hello/', (req, res) => {
  res.send('Hello again!')
})

// start server
app.listen(cfg.port, () => {
  console.log(`Example app listening on port ${cfg.port}`)
})