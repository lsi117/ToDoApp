const db = require('../db/config')

const List = {}

List.findAll = () =>
  db.query('SELECT * FROM list');

  List.findById = id => {
    return db.one(
      'SELECT * FROM list WHERE id = $1', [id]);
  };

List.create = list =>{
  return db.one(
    `INSERT INTO list
    (chore, description, status)
    VALUES($1, $2, $3)
    RETURNING *`, [list.chore, list.description, list.status])
}

List.update = (list, id) =>{
    return db.one(
      `UPDATE list SET
      chore = $1,
      description = $2,
      status = $3
      WHERE id = $4
      RETURNING *`, [list.chore, list.description, list.status, id])
}

List.destroy = id => {
  return db.none(
    `DELETE FROM list
    WHERE id = $1`, [id]);
};


module.exports = List

