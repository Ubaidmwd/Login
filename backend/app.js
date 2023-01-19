const express =require('express')
require('dotenv').config({ path: "backend\config.env" });

const app=express()
app.use(express.json())
const mongoose=require('mongoose')
const User=require('./models/user')
const bcrypt=require('bcryptjs')

//////////////////////////////////////////////////////////////////////////////////////
// const PORT=4000 1XfmMFfAK8gMBUlV                                              //   
// mongodb+srv://ubaid:1XfmMFfAK8gMBUlV@cluster0.owxo0v7.mongodb.net/?           // retryWrites=true&w=majority
//////////////////////////////////////////////////////////////////////////////////////
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

app.post('/signup',async (req,res)=>{

   
    try{
        const {email,password}=req.body
        console.log(req.body)
        if(!email || !password){
            return res.status(422).json({error:"please add all fields"})
        }
        
        const user = await User.findOne({email})
        if(user){
            return res.status(422).json({error:"Email is Already Exsist"})
    
        }
        const hashedPassword=await bcrypt.hash(password,12)
        await new User({
            email,
            password:hashedPassword
        }).save()
        res.status(200).json({message:"Singup Sucessful Now Login"})

    }catch(error){
        console.log(error)

    }
    

})

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT || 4000}`);
  });