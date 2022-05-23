const mongoose=require('mongoose');
const Schema= mongoose.Schema;


const blogSchema= new Schema({        //inside this we need to pass an object as parameter to define the structure of schema
    title:{
        type :String,
        required: true,

    },
    snippet:{
        type: String,
        required : true,
    },
    body:{
        type: String,
        required: true
    }
},{timestamps:true});
const Blog=mongoose.model('blog',blogSchema);
module.exports=Blog;