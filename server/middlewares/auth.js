import dotenv from 'dotenv'
dotenv.config({path: "./config.env"})
import jwt from 'jsonwebtoken'

function auth(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1];

    if(!token) return res.status(401).json({message: 'Unauthorized, login again!'});

    jwt.verify(token, process.env.TOKEN_SECRET, (err,payload)=>{
        if(err) {
            console.log(err)
            return res.status(403).json({message: 'Forbidden, login again!'})
        } else {
            req.payload = payload
            next()
        }
    })
}

export default auth