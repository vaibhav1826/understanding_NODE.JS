//this program is the application of the express in nodejs
//express is a web application framework for nodejs
//for using express we have to install the famework by using the command npm i express and check in the package.json file for the dependency
// visit https://expressjs.com for documentation
const http = require('http');
const express = require('express');
const app = express();

app.get('/',(request,respond)=>{
respond.send("hi ! " + request.query.name );//here we also don't need url module to handle query string
});
//(app.get) is a method of the express framework which will handle the get request
app.get('/about',(request,respond)=>{
respond.send("its all about page");
});

app.get('*',(request,respond)=>{
respond.send("ERROR 404!");
});

const myserver = http.createServer(app);

myserver.listen(4500,()=>{
console.log("server connected");
});
