var express_ = require('express');
var router_ = express_.Router();

var stInfo  = require('../controllers/studentController')
var userInfo  = require('../controllers/userController')
router_.get('/',(req,res)=>{
   
  res.send('<h2>Welcome to Student Home</h2>')
});

  router_.get('/getstudent',(req,res)=>{
   
    res.send(stInfo[0]())
  });

  router_.get('/getstudents',(req,res)=>{
   
    res.send(stInfo[1]())
  });
  router_.post('/addStudent',(req,res)=>{
    console.log(req.body);
    res.send('One Student Added')
  });


  module.exports = router_;