const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types


const todoscheme=({
    todo:{
        type:String,
        required:true
    },
    todoBy:{
        type:ObjectId,
        ref:"User"

    }
})

module.exports=mongoose.model("Todo",todoscheme);