const { error } = require("console");
const fs = require("fs"); // file module from library (module fs)

// synchronus  call for writing data in a file
fs.writeFileSync("./test.txt","hey there!");

// Asynchronus call for writing data in a file
fs.writeFile("./test.txt","hey ! there",(error)=>{});

//synchronus call for reading data from a file
const result = fs.readFileSync("./test.txt","utf-8"); // utf-8 is used for standard incoding
console.log(result);

// asynchronus call for reading data from a file
fs.readFile("./test.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log(result);
    }
})

