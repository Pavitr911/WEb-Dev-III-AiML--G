const express=require('express');
const app=express();
const port=3000;

const logmiddleware=(req,res,next)=>{
    //console.log(`${req.method} ${req.url}`);
    //next();
    req.name="John Doe";
    console.log(`Request received from ${req.name}`);
    res.send("hello from middleware");
})

app.use(logmiddleware);

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})