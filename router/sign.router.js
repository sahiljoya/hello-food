import Express from "express";
import { signcontroller } from "../controller/sign.controller.js";
const singRouter = Express.Router()
singRouter.route("/sing/user").post(signcontroller)
export default singRouter