import mongoose from "mongoose";
const reveiwmod = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:"signData",
        required:true
    },
    prodectId:{
        type:mongoose.Schema.Types.ObjectId,ref:"project",
        required:true
    },
    rating:{
        type:Number,
        enum:[1,2,3,4,5],
        required:true
    },
    review:{
        type:String
    },
    status:{
        type:String,
        enum:['Active',"deactive"],
        default:"Active"
    },
    ceateAt:{type:Date,default:Date.now},
    updateAt:{type:Date,default:Date.now},
})
const rating = mongoose.model("UserRating",reveiwmod)
export default rating