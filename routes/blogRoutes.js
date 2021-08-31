const express = require('express');
const router = express.Router();
const Blog = require ('../models/blog');

//HomePage
router.get('/', (req, res) => {
    res.redirect('/blogs');
      // const blogs = [
      //   {title: 'Latest Reviews', snippet: 'Our unique Reviews of our beloved stars latest looks.'},
      //   {title: 'To be announced', snippet: 'Stay updated about the news of our to be announced designs.'},
      //   {title: 'Story Time', snippet: 'Our latest designs and the story behind. '},
      // ];
      // res.render('index', { title: 'Home', blogs });
    });
  
     //Blogs Prouterge
     router.get('/blogs', (req,res)=>{
       Blog.find().sort({createdAt: -1})
       .then((result)=>{
         res.render('index',{ title: 'All Blogs', blogs: result})
       })
       .catch((err)=>
       {
         console.log(err);
       });
     })
     //Create Page
   router.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
     //Certain Blog return
     router.get('/blogs/:id', (req,res)=>{
       const id = req.params.id;
       console.log(id);
       Blog.findById(id)
       .then((result)=>{
         res.render('details',{blog: result, title:'Blog Details'})
         
       })
       .catch((err)=>
       {
         res.status(404).render('404',{ title: 'Blog Not Found'})
       });
     })
  //Post Request
     router.post('/blogs',(req,res)=>
     {
       const blog = new Blog(req.body);
       blog.save()
       .then((result)=>
       {
         res.redirect('/blogs');
       })
       .catch((err)=>
       {
         console.log(err);
       })
     })
  
   //Delete request
   router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
 
  module.exports=router;