import express from "express";


const app = express()

app.get('/', (req,res)=>{
    res.send('Welcome to home page')
})


export default app