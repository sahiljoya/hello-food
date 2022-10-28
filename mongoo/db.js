import mongoose from "mongoose";
const mongodb = async () => {
    const con = await mongoose.connect(
        "mongodb://localhost:27017/hello-food",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("host---",con.connection.host);
}
export default mongodb
