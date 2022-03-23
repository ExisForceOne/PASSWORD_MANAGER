import dotenv from 'dotenv'
dotenv.config({path: "./.env"})

import mongoose from "mongoose";

export default function connectToDB(){
    mongoose.connect(process.env.DB)
}