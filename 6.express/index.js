//first we have to install express --> npm install express 
// simple structure for an express to create a server
const express = require('express'); // this module is for accessing express functionality
const app = express();

// this is a way how we create a server
app.get('/',(request ,respond)=>{ // its for home page
respond.send("its a home page");
});

app.get('/about',(request,respond)=>{ // its for about page
respond.send("its all about page");
});

app.get('*',(request,respond)=>{ // its for by default pages we dont want to access on server
respond.send("ERROR 404 !");
});

// this is a way in which we start a server at localhost:4500 
app.listen(4500,()=>{
console.log("server started");
});