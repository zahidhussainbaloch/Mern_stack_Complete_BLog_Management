const router = require('express').Router();
const Usre = require('../models/User');
const Post = require('../models/Post');
const { Router } = require('express');



//Add Post

router.post('/',async(req, res)=>{
     
    const newPost = new Post(req.body); 
    try{

        const savedPost = await newPost.save();

       return res.status(200).json(savedPost);

    }catch(err){
        res.status(500).json(err);
    }

})


//update Post

router.put('/:id', async(req, res)=>{

    try{
        const post = await Post.findById(req.params.id);
        try{
            if(post.username === req.body.username)
            {
                try{
                      const UpdatedPost = await Post.findByIdAndUpdate(req.params.id, {
                        $set:req.body,
                      },{new:true}
                      );  

                    res.status(200).json(UpdatedPost);

                }catch(err){

                }

            }else{
                   res.status(401).json("You Can Update Only Your Post..!");
            }
        }catch(err){

        }
    }catch(error){

        res.status(500).json(error);
    }
});


//Delete Post

router.delete('/:id', async(req, res) => {

    const post = await Post.findById(req.params.id);
   
    if(post.username === req.body.username){

        try{
                await Post.deleteOne({username: req.body.username});

              return  res.status(200).json("Post deleted successfully!");

            }catch(error){
            
               return res.status(500).json(error);
            }
    }else{
                return res.status(401).json("You Can Delete Only Your Post..!");
    }


});





//Get Single post 

router.get('/:id', async (req, res) => {

    try{
         const post = await Post.findById(req.params.id);

         console.log(post)

         res.status(200).json(post);   

    }catch(error){

        res.status(500).json(error);
    }
})

//Get All posts

router.get('/', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;

      try{
        let posts;

        if(username){
            posts = await Post.find({username})

        } else if(catName){

              posts = await Post.find({categories:{$in:[catName]}})
              
        }else{
            posts = await Post.find();
        }

       return res.status(200).json(posts);

      }catch(error){   
           return res.status(500).json(error);
       }
      
});



module.exports = router;