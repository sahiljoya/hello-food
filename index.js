import Express from "express";
import { mongo } from "mongoose";
import mongodb from "./mongoo/db.js";
import router from "./router/project.router.js";
import ratingRouter from "./router/review.router.js";
import singRouter from "./router/sign.router.js";
const app = Express()
app.use(Express.json())
mongodb()
app.use(router)
app.use(ratingRouter)
app.use(singRouter)
app.listen(3003,(req,res)=>{
console.log("3003---port");
})