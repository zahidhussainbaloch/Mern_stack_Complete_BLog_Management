
const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/blogapp')
.then(console.log('MongoDB Connected successfully..!'))
.catch((error)=>{
      
    console.log(error);
})

App.use('/api/auth', Authroute)
