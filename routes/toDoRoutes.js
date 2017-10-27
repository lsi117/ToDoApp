const express = require('express')

const toDoRoutes = express.Router()
const listController = require('../controller/toDoController.js')

toDoRoutes.get('/',listController.index)

toDoRoutes.get('/:id', listController.single)

toDoRoutes.get('/allToDo', (req,res)=>{
  res.render('create',{})
})
toDoRoutes.post('/', listController.create)

toDoRoutes.get('/:id/edit', listController.edit);
toDoRoutes.put('/:id', listController.update);

toDoRoutes.delete('/:id', listController.delete);


module.exports = toDoRoutes
