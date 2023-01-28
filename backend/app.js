require('dotenv').config({ path: "backend\config.env" });
const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const User = require('./models/user')
const Todo = require('./models/todo')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET,MONGO_URI}= require('./config/key')

mongoose.set('strictQuery', false);
// const url = 

mongoose.connect(
    MONGO_URI,
  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Connected to mongodb database successfully!");
  }
);


// app.get('/', (req, res) => {
//     res.json({ message: "Hello to node js app" })
// })

const verification = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "First need to Login" })
    }
    try {
        const { userid } = jwt.verify(authorization, JWT_SECRET)
        req.user = userid
        next()
    } catch (error) {
        console.log(error)
    }
}
app.get('/verify', verification, (req, res) => {
    res.json({ message: "Hello to node  app" })
})

app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        if (!email || !password) {
            return res.status(422).json({ error: "please add all fields" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(404).json({ error: "Email is Already Exsist" })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        await new User({
            email,
            password: hashedPassword
        }).save()
        res.status(200).json({ message: "Singup Sucessful Now Login" })
    } catch (error) {
        console.log(error)
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        if (!email || !password) {
            return res.status(422).json({ error: "please add all fields" })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ error: "Email does not exsist please signup " })
        }
        const match = await bcrypt.compare(password, user.password)
        if (match) {
            const token = jwt.sign({ userid: user._id }, SECRET_KEY)
            res.status(201).json({ token })
        }
        else {
            return res.status(401).json({ error: "email or passoword is incorrect " })
        }
    }
    catch (error) {
        console.log(error)
    }
})

app.post('/todo', verification, async (req, res) => {
    try{
        const data = await new Todo({
            todo: req.body.todo,
            todoBy: req.user
        }).save()
        res.status(201).json({ message: data })
    }
    catch(err){
        console.log(err)
    }
})
app.get('/gettodos',verification,async (req,res)=>{
    try{
        const data=await Todo.find({
            todoBy:req.user
        })
        res.status(201).json({message:data})
    }
    catch(err){
        console.log(err)
    }
    
})
app.delete('/todos/:id',verification,async (req,res)=>{
    try{
        const data=await Todo.findOneAndRemove({
            _id:req.params.id
        })
        res.status(201).json({message:data})
    }
    catch(err){
        console.log(err)
    }
    
})

if(process.env.NODE_ENV=='production'){
    const path=require('path')
    app.get('/',(res,req)=>{
        res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
    })
}


app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT || 4000}`);
});