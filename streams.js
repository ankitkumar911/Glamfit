const fs = require('fs');
const readstream = fs.createReadStream('./blog/abc.txt');
const writestream =fs.createWriteStream('./blog/blog.txt');
 readstream.on('data',(chunk)=>{
     console.log('----new----');
console.log(chunk.toString());
writestream.write(chunk);

 });
