const express =require('express')
require('dotenv').config({ path: "backend\config.env" });

const app=express()
// const PORT=4000

app.get('/',(req,res)=>{

    res.json({message:"Hello to node js app"})

})

app.listen(process.env.PORT,()=>{
    console.log('port is strating on Port',process.env.PORT)
})
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });