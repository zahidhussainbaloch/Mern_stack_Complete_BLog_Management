const router = require('express').Router();

const User = require('../models/User')

const bcrypt = require('bcrypt');

//Registration User

router.post('/registration', async(req, res)=>{
      try{
            const salt = await bcrypt.genSalt(10);
            const hashedpass = await bcrypt.hash(req.body.password, salt);
            const newUser = new User({
                 username:req.body.username,
                email:req.body.email,
                password:hashedpass,

            });
            const user = await newUser.save();
             res.status(200).json(user); 
      }catch(error){
            res.status(500).json(error);

      }
})

// Login User
router.post('/login', async(req, res)=>{
   try{
      const user = await User.findOne({username:req.body.username});
      
      if(!user){ 
        return  res.status(400).json('Wrong Credentials!')
      };       
      const Validated = await bcrypt.compare(req.body.password, user.password);
      if(!Validated){
       return  res.status(400).json('Wrong Credentials!')
      };

      const {password, ...others} = user._doc;
      res.status(200).json(others);      

   }catch(err){
       res.status(500).json(err); 
   }
});


module.exports = router;