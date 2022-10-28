import mongoose from "mongoose";
const food = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createby: {
        type: mongoose.Schema.Types.ObjectId, ref: "signData"
    },
    price: {
        type: Number,
         required:true
    },
    is_popular: {
        type: Boolean,
        default: 0
    },
    description: {
        type: String,
         required: true
    },
    offers: {
        type: Boolean,
        default: 0
    },
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})
const hello = mongoose.model("project", food)
export default hello