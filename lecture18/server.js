const express=require('express');
const app=express();
const port=3000;    

app.get('/age-check/:age',(req,res)=>{
    let age=18
    try{
        if(age<=18){
            throw new Error('You are not eligible to vote');
        }else{
            res.send('You are eligible to vote');
        }
    }catch(err){
        res.status(500).json(success:false,message:age is less than 18);
        
    }

});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}