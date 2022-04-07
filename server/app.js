import dotenv from 'dotenv'
dotenv.config({path: "./.env"})

import express from "express";
import connectToDB from "./db/mongoose.js";
import cors from "cors";

import path from "path"
const __dirname = path.resolve();


import usersRouter from './routes/users.js'
import keysRouter from './routes/keys.js'

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

app.use(usersRouter)
app.use(keysRouter)

//serve frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')))
} else {
    app.get('/', (req,res)=>{
        res.send('Welcome to home page')
    })
}







export default app