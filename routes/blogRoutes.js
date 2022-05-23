const express=require ('express');
const  Blog=require('../models/blog');
const router=express.Router();



router.get('/blogs/create',(req,res)=>{
    res.render('create',{title:"create"});
});

//blog routes
router.get('/blogs',(req,res)=>{
 Blog.find().sort({createdAt: -1})       //its an asynchrouns function thats why we weill now use .then
 .then((result)=>{
  res.render('index',{title:'allblogs',blogs:result})
 })
 .catch((err)=>{
     console.log(err);
 })
});

router.post('/blogs',(req,res)=>{
   const blog= new Blog(req.body);
   blog.save().then((result)=>{
       res.redirect('/blogs');
   })
   .catch((err)=>{
       console.log(err);
   })            // req.body is the data that we get from urlencoded middleware
//console.log(req.body);
});

router.get('/blogs/:id',(req,res)=>{
  const id = req.params.id;
     Blog.findById(id)
     .then((result)=>{
         res.render('details',{blog:result,title:'Blog Details'});//you can call it blog or apple what ever you want butyou need to recieve it with the same name
     })
     .catch(err=>{
          res.status(404).render('404',{title:'Blog Not Found'})})
  });

  router.delete('/blogs/:id',(req,res)=>{
     const id=req.params.id;
     Blog.findByIdAndDelete(id).then(result =>{
         res.json({redirect:'/blogs'})
     })
     .catch(err=>{
         console.log(err);
     })
 });


 module.exports= router;