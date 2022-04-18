import express from "express";
import connectToDB from "./db/mongoose.js";
import cors from "cors";

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

//Routes
app.get('/', (req,res)=>{
    res.send('Welcome to home page')
})


app.use('/api/users/', usersRouter)
app.use('/api/keys', keysRouter)

export default app