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

    listController.create = (req, res) =>{        //moved create to above single
    List.create({
      chore: req.body.chore,
      description: req.body.description,
      status: req.body.status,
    }).then(allData =>{
      res.redirect('/allToDo')
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err})
    })
  }

  listController.single = (req,res) =>{
    List.findById(req.params.id)
    .then(allData =>{
      res.status(200).render('single.ejs',{
        allData: allData,
      })
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err})
    })
  }

  listController.edit = (req,res) =>{
    List.findById(req.params.id)
    .then(allData => {
      res.status(200).render('edit', {
        allData: allData,
      })
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err})
    })
    }


  listController.update = (req,res) =>{
    List.update({
      chore: req.body.chore,
      description: req.body.description,
      status: req.body.status,
    }, req.params.id)
    .then(allData =>{
      res.redirect('/allToDo')
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err})
    })

  }

listController.delete = (req, res) => {
  List.destroy(req.params.id)
    .then(() => {
      res.redirect('/allToDo');
    }).catch(err => {
      res.status(500).json({
        err,
      });
    });
};




module.exports = listController   //passing this to the route
