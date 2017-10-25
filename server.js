const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

//starts the app
const app = express()

app.use(methodOverride('_method'))
