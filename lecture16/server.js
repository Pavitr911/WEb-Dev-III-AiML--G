const express=require('express');
const app=express();
const port=3000;

app.use(morgan());

const logmiddleware=(req,res,next)=>{
    //console.log(`${req.method} ${req.url}`);
    req.name="John Doe";
    console.log("Request url:",req.url,"req method",req.method,"Time",new Date().toLocaleString());
    //res.send("hello from middleware");
    next();
})

const apiCheckMiddleware=(req,res,next)=>{
    if(res.query.API_KEY==="1234");{
        console.log("authenticator")
        next();
    }else{
        res.send("API invaild")
    }

app.use(logmiddleware);
app.use(apiCheckMiddleware);

app.get('/data',(req,res)=>{
    console.log("request name:",req.name);
    console.log("HELLO WORLD");
    res.send('Hello World');
})

app.get('/data',(req,res)=>{
    console.log("request name:",req.name);
    console.log("HELLO WORLD");
    res.send('Hello World');
})

app.get("/data",(req,res)=>{
    console.log("hello world");

}

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
