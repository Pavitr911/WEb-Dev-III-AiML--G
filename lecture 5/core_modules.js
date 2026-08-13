const os=require('os');
const path=require("path")
const fs=require("fs")

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
// console.log(os.homedir())
// console.log(os.totalmem()/(1024*1024*1024) + " GB");
// console.log(os.freemem()/(1024*1024) + " MB");

// const filePath=path.resolve(__dirname,"core_modules.js");
// console.log(__dirname);

// const filePath=path.join("AIML-G","lecture 5","core_modules.js");
// console.log(filePath);

// const file="AIML-G/lecture 5/core_modules.js";
// console.log(path.basename(file)); //file name
// console.log(path.extname(file)); //.js
// console.log(path.dirname(file)); //AIML-G/lecture 5
// console.log("A")
const data=fs.readFileSync("sample.txt","utf-8");  //synchromous
console.log(data);
// console.log("B")
// console.log("A")
fs.readFile("sample.txt","utf-8",(err,data)=>{  //asynchronous
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
// console.log("B")