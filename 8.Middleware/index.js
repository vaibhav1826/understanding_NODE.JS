const http = require('http');
const fs= require('fs');
const express = require('express');
const { error } = require('console');
const app = express();
const PORT =4500 ;

app.use((req,res,next)=>{
    console.log("request from the middleware 1");
    req.myname='admin';
    const log =` \n ${Date()} : ${req.method}`;
    fs.appendFile("./log.txt",log,(error, data)=>{});
    next();
});

app.use((req,res,next)=>{
    console.log(`request from the middleware 2 `);
    console.log(req.myname);
    next();
});
// routes
app.get('/',(req,res)=>{
    res.send("home page");
});

app.get('/about',(res,req)=>{
    res.send("about us");
});

app.listen(PORT,()=>{
console.log("server started");
});