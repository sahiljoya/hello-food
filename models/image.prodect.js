import mongoose from "mongoose";
const images = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    fullpath:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,ref:"project",
        required:true
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})
const ProductImages = mongoose.model("product_images", images);
export default ProductImages;

