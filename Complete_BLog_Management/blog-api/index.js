const express = require('express');
const  App = express();
const dotenv = require('dotenv');

const mongoose = require('mongoose'); 

 const  Authroute = require('./routes/Auth');
const UserRoute = require('./routes/Users'); 
const postRoute = require('./routes/post'); 
const categoryRouter = require('./routes/Category');

const multer = require('multer');
const path = require('path');

const { application } = require('express');


// const connection = require('./DB/connection');


  const port = process.env.PORT || 8000; 

  App.use(express.json());
  App.use("/images",express.static(path.join(__dirname,"/images")));
  


App.get('/',(req,res)=>{
       
      res.send("Express Js Project Started..")
})

mongoose.connect('mongodb://localhost:27017/blogapp')
.then(console.log('MongoDB Connected successfully..!'))
.catch((error)=>{
      
    console.log(error);
})

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, 'images')
  },filename:(req, file, cb)=>{
     
    console.log(req.body.photo);

    // cb(null,file.originalname)
    cb(null,req.body.name)
  }
})

const upload = multer({storage:storage});
App.post("/api/upload", upload.single('file'),(req, res)=>{

  res.status(200).json("File successfully uploaded..!"); 

});



App.use('/api/auth', Authroute);
App.use('/api/users', UserRoute);
App.use('/api/posts', postRoute);
App.use('/api/categories',categoryRouter);

  App.listen(port, ()=>{
      console.log(`Node Server Started Port ${port}`);
  })

