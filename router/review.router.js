import Express from "express";
import { ratingData, ratingGet, searchData } from "../controller/review.controller.js";
const ratingRouter = Express.Router()
ratingRouter.route("/rating/user").post(ratingData)
ratingRouter.route("/rating/user-get").get(ratingGet)
ratingRouter.route("/rating/userid").get(searchData)
export default ratingRouter