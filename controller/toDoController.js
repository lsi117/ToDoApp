const List = require('../models/todomodel.js')

const listController = {}

listController.index = (req, res) => {
  // console.log('showing index')
  List.findAll().then((allData) => {
    console.log(allData)
    res.render('allToDo',
      {allData})
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })};


module.exports = listController   //passing this to the route
