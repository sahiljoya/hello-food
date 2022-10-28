import Express from "express";
import { foodcast, getFood } from "../controller/project.controller.js";
import  {imageUploaded} from "../servish/image.servish.js"
const router = Express.Router()
router.route("/dish/surf").post(imageUploaded.array('image',2),  foodcast)
router.route("/dish/surfs").get(getFood)
export default router