const router = require('express').Router();

const { model } = require('mongoose');
const category = require('../models/Category');



//add categories

router.post("/", async (req, res) => {   
    const newCat = await new category(req.body);
    try{
       const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    }catch(err){
         
    }
});


//get categories

router.get("/", async (req, res) => { 
    
    try{
          const Cats = await category.find();
        res.status(200).json(Cats);
    }catch(error){
        res.status(404).json(error);
    }

})


module.exports = router;