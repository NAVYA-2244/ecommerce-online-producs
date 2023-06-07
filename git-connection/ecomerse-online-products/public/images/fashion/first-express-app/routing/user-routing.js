var express_ = require('express');
var router_ = express_.Router();

var stInfo  = require('../controllers/studentController')
var userInfo  = require('../controllers/userController')


router_.get('/',(req,res)=>{
   
  res.send('<h2>Welcome to User Home</h2>')
});
router_.get('/getuser',(req,res)=>{
  
    res.send(userInfo[0]())
  });

  router_.get('/getusers',(req,res)=>{
   
    res.send(userInfo[1]())
  });

  router_.post('/addUser',(req,res)=>{
      console.log(req.body);
    res.send('One User Added')
  });

  


  module.exports = router_;