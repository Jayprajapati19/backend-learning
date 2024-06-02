// require('dotenv').config({ path: './env' })
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(` Server is Runing at porrrt : ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("MONGO DB CONNECTION FAILD!!:", error);
    })