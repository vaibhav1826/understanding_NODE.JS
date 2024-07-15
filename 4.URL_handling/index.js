// this is basically for learning of how to  handling the  url in node.js 


const http = require('http'); // built-in module for accessing http library function
const fs = require('fs'); // built-in module for accessing fs library function
const url = require('url'); // built-in module for accessing url library function

// this is for creating a server
const myserver = http.createServer((request,respond)=>{
    if (request.url ==="/favicon.ico") return respond.end();
    const log =`${Date()} : user requested on url : ${request.url} \n`;
    const myurl= url.parse(request.url,true); // for parsing the url and getting its data
    console.log(myurl);

    fs.appendFile("file.txt",log ,(err,data)=>{
        switch(myurl.pathname){
            case '/':
                respond.end("its home page");
                break;
            case '/about':
                const username = myurl.query.myname;
                respond.end(`its a about page \n hi ${username} `);
                break;
            default:
                respond.end("error 404 !");
                break;
        }
    })
});

// for getting information on the localhost at server -->  localhost:4500 
myserver.listen(4500,()=>{
    console.log("server started");
})