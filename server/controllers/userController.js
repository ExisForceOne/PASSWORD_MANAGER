import dotenv from 'dotenv'
dotenv.config({path: "./config.env"})

import User from '../db/models/user.js'


const userController = {

    async register(req,res){

        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        })

        try {
            await newUser.save()
            res.status(201).json(newUser)
            console.log('user added');
        } catch(err) {


            if (err.name === 'MongoServerError' && err.code === 11000){
                res.status(422).json({message: 'This email is already in use!'})

            } else if(err.errors) {
                res.status(422).json({message: Object.values(err.errors)[0].message})
                //returs message from validator errors
                
            } else {
                console.log(err)
                res.sendStatus(500)
            }
        }
    },

    
    async login(req,res){

        try {
            const user = await User.findOne({email: req.body.email})
            if(!user) {
                res.status(401).json({message: 'Incorrect login credentials, check your email and password!'})
                return
            }

            const isMatch = await user.matchPasswords(req.body.password);
            if(!isMatch){
                res.status(401).json({message: 'Incorrect login credentials, check your email and password!'})
                return
            }


            res.status(201).json({
                email: user.email 
            })
            
        } catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    },


}

export default userController