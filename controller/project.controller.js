import ProductImages from "../models/image.prodect.js";
import hello from "../models/project.model.js"
export const foodcast = async (req, res) => {
   try {
      let prodectcreated = await hello.create(req.body)
      if (prodectcreated) {
         req.files.forEach(async (image, key) => {
            var imagetype = ''
            if (image.mimetype == 'image/png') {
               imagetype = 'png'
            } else if (image.mimetype == 'image/jpg' || image.minetype == 'image/jpef') {
               imagetype = 'jpg'
            }
            let imageData = {
               path: image.filename,
               type: imagetype,
               fullpath: "localhost:3003/" + image.path,
               productId: prodectcreated._id
            }
            await ProductImages.create(imageData)
         });
         res.send({
            status: true,
            msg:"image with data add",
            data:prodectcreated
         })
      }
   } catch (error) {
      res.send(error)
   }
}


export const getFood = async (req, res) => {
   try {
      var foodget = await hello.find({status:"Active"}).populate("createby")
      if (foodget) {
         res.send({
            status: true,
            msg: "data add",
            data: foodget
         });
      } else {
         res.send({
            status: false,
            msg: "Something wrong ",
            data: {}
         });
      }
   } catch (error) {
      res.send({
         status: false,
         msg: "Something wrong with request.",
         data: error
      });
   }
}