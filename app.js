

const express=require('express');
const { render } = require('express/lib/response');

const mongoose =require('mongoose');

const blogRoutes=require('./routes/blogRoutes');

const app=express();

 const dbu ='mongodb+srv://firstblog:glamfit123@nodetuts.pdyk7.mongodb.net/nodetuts?retryWrites=true&w=majority';
 mongoose.connect(dbu)
.then((result)=>{app.listen(3000);console.log('connected');})
  .catch((err)=>console.log(err));



app.set('view engine', 'ejs');




app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    
    res.redirect('/blogs');

});
app.get('/about',(req,res)=>{
   
    res.render('about',{title:"about"});

});
app.use(blogRoutes);


app.use((req ,res)=>{
    res.status(400).render('404',{title:"error"});
});  