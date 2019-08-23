const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet');
const info = require('./routes/info')
const router = express.Router()
app.use('/api', router);

router.use('/info', info);

app
  .use(bodyParser.json({ type: 'application/*+json' }))
  .use(helmet())
  .use(compression())
  .use(express.json())
  

module.exports = app
