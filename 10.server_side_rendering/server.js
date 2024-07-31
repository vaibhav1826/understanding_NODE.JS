//  server-side rendering in node.js using express and ejs template 

const path = require('path'); // importing the path module
const express = require('express'); 
const app = express();
const PORT = 4500; // port at localhost in which server is running 


// setting the view engine as ejs template
app.set('view engine','views');
app.set('views',path.resolve('./views'));// setting the path 

// get request for rendering the html at home page 
app.get('/',(req,res)=>{
res.render('home.ejs');
});


// port at which server is starting in locahost 
app.listen(PORT,()=>{
   console.log(`serving starting at port: ${PORT}`);
})