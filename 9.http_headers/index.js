const express = require ('express');
const app = express();
const PORT = 4500;


// routes
app.get("/",(req,res)=>{
console.log(req.headers);
res.setHeader("x-username" ,"vaibhav1826"); // setting custom headers
// adding X- in front of header name is a convention to set custom header
// custom headers are always set before sending respond
res.send("welcome to our homepage");
console.log(req.headers); // printing headers
});

app.get("/about",(req,res)=>{
    res.send("about us page");
    console.log(req.headers); // printing headers
});


// server starting at localhost:4500 
app.listen(PORT,()=>{
console.log(`server starting at localhost:${PORT}`);
});