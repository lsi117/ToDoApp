const express = require('express')

const toDoRoutes = express.Router()
const listController = require('../controller/toDoController.js')

toDoRoutes.get('/',listController.index)

module.exports = toDoRoutes
