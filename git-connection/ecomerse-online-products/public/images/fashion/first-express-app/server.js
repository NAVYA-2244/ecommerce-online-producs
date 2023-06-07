  var express_ = require('express');
          var stInfo  = require('./controllers/studentController')
          var userInfo  = require('./controllers/userController')
        var routes = require('./routing')  ;
              var std_routes =       require('./routing/student-routing');  
             var user_routes  = require('./routing/user-routing');  
  var ourApp  = express_();
  ourApp.listen(4050,()=>{ console.log(" SERVER STARTED");});
ourApp.use(express_.urlencoded({extended:false}));


  ourApp.get('/',(req,res)=>{

    res.send(" Welcome to Application.")
  });
  // ourApp.use('/',routes)
  ourApp.use('/user',user_routes)
  ourApp.use('/student',std_routes)
  // ourApp.get('/user',(req,res)=>{
  
  //   res.send(userInfo[0]())
  // });

  // ourApp.get('/users',(req,res)=>{
   
  //   res.send(userInfo[1]())
  // });

  // ourApp.post('/addUser',(req,res)=>{
  //     console.log(req.body);
  //   res.send('One User Added')
  // });

  // ourApp.get('/student',(req,res)=>{
   
  //   res.send(stInfo[0]())
  // });

  // ourApp.get('/students',(req,res)=>{
   
  //   res.send(stInfo[1]())
  // });
  // ourApp.post('/addStudent',(req,res)=>{
  //   console.log(req.body);
  //   res.send('One Student Added')
  // });

