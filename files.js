const fs= require('fs'); 
// fs.readFile('./blog/blog.txt',(err,data)=>{
//     if(err)
//     console.log(err);
//     console.log(data.toString());
// }); 
// fs.writeFile('./blog/blog.txt','nothing here',(err,data)=>{
//     if(err)
//     console.log('fuck');
//     console.log('file was written');

// });
// if(!fs.existsSync('./assets'))
// {
// fs.mkdir('./assets',(err)=>{
//     if(err)
//     console.log(err);
//     console.log('created');
// });
// }

// else
// {
//     fs.rmdir('./assets',(err)=>{
//         if(err)
//         console.log(err);
//         console.log('deleted');
//     })
// };
if(fs.existsSync('./blog/delete.txt')){
    fs.unlink('./blog/delete.txt',(err)=>
    {
        if(err)
        console.log(err);
        console.log('txtdeleted')
    })
};
