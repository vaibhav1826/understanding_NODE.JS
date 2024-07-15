// It's our main file and we always name it after index as it is a good aproach \
//to start our project with a index named file

const http = require('http'); // it's a build-in module 
const fs= require('fs'); // its a build-in file handling module 
// there are two server for argument of request and 
// respond in which request or respond data are stored

// it's a way to create a http server 
const myserver = http.createServer((request , respond)=>{
    const log = `${Date()}: request received on ${request.url}\n `;

 // its a file handling method through which we can make a log data in a log.txt     
    fs.appendFile("log.txt",log ,(error,data)=>{
        respond.end("user request");
    })
    switch(request.url){  
// through switching the url we can now different port on our server
        case '/':
            respond.end("its a home page");
            break;
        case '/about':
            respond.end("its about page");
            break;
        default:
            respond.end("error 404");
            break;
    }
    
});

// in listen() function it comes in localhost:4500 to show the server
myserver.listen(4500,()=>{
        console.log("server started");
});