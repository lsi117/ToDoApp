const db = require('../db/config')

const List = {}

List.findAll = () =>
  db.query('SELECT * FROM list')


module.exports = List

