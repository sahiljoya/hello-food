import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import signUser from "../models/sing.models.js"
export const signcontroller= async(req,res)=>{
   try {
    const numberFind = await signUser.findOne({number:req.body.number})
    const emailFind = await signUser.findOne({email:req.body.email})
    if (numberFind) {
        res.send({
            status:false,
            msg:"number is allready hai",
            data:{}
        })
    }else if(emailFind){
        res.send({
            status:false,
            msg:"email is allready hai",
            data:{}
        })
    }else{
        let pass = await bcrypt.hash(req.body.password,10)
        req.body.password=pass
        let creatData = await signUser.create(req.body)
        if (creatData) {
            creatData.token=await Jwt.sign({time:Date(),userId:creatData._id},"khan")
            res.send({
                status:true,
                msg:"data entry success",
                data:creatData
            })
        }else{
            res.send({
                status:false,
                msg:"not created",
                data:{}
            })  
        }
        
    }
   } catch (error) {
    res.send({
        status:false,
        msg:"something wrong",
        data:error
    })
   }
}