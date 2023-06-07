var express_ = require('express');
var router_ = express_.Router();

var stInfo  = require('./controllers/studentController')
var userInfo  = require('./controllers/userController')

router_.get('/user',(req,res)=>{
  
    res.send(userInfo[0]())
  });

  router_.get('/users',(req,res)=>{
   
    res.send(userInfo[1]())
  });

  router_.post('/addUser',(req,res)=>{
      console.log(req.body);
    res.send('One User Added')
  });

  router_.get('/student',(req,res)=>{
   
    res.send(stInfo[0]())
  });

  router_.get('/students',(req,res)=>{
   
    res.send(stInfo[1]())
  });
  router_.post('/addStudent',(req,res)=>{
    console.log(req.body);
    res.send('One Student Added')
  });


  module.exports = router_;