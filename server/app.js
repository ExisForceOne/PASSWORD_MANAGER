import express from "express";
import connectToDB from "./db/mongoose.js";
import cors from "cors";
const app = express()

//DB
connectToDB()

//Parser
app.use(express.json());

//ENABLE CORS
app.use(
    cors({
    origin: "*"
    })
)




app.get('/', (req,res)=>{
    res.send('Welcome to home page')
})




export default app