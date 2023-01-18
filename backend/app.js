const express =require('express')
require('dotenv').config({ path: "backend\config.env" });

const app=express()
const mongoose=require('mongoose')

// const PORT=4000 1XfmMFfAK8gMBUlV
// mongodb+srv://ubaid:1XfmMFfAK8gMBUlV@cluster0.owxo0v7.mongodb.net/?retryWrites=true&w=majority

mongoose.set('strictQuery', false);

const url ='mongodb://localhost:27017/Login'
mongoose.connect(url).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


app.get('/',(req,res)=>{

    res.json({message:"Hello to node js app"})

})

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT || 4000}`);
  });