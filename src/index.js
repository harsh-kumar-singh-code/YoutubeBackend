//require('dotenv').config({path: './env'})
import path from "path"
import dotenv from "dotenv"
dotenv.config({
    path: "./.env" 
});
import connectDB from "./db/index.js";
import {app} from './app.js'



connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ",err);
})







/*
(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRor:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`APP is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR:",error)
        throw err
    }
})()

*/