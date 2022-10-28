import mongoose from "mongoose";
const singes = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true
    }, 
    number: {
        type: Number,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
     token: {
        type: String,
        required: false
    },
})
const signUser = mongoose.model("signData",singes)
export default signUser