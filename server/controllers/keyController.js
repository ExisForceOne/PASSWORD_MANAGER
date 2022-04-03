import Key from '../db/models/key.js'
import mongoose from 'mongoose'

const keyController = {

    async get(req,res){

        try {
            const keys = await Key.find({author: req.payload.userID})
            res.status(200).json(keys)
        } catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    },

    async getById(req,res){
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({message: 'Key nieznaleziony'})
            return
        }

        try {
            const data = await Key.findById(id)

            if(!data) {
                res.status(404).json({message: 'Key not found'})
                return
            }
            if(data.author!=req.payload.userID){
                res.status(403).json({message: 'You dont have access to this data'})
                return
            }

            res.status(200).json(data)
            return
        } catch(err){
            console.log(err)
            res.status(500)
        }

    },

    async add(req,res){


        const newKey = new Key({
            name: req.body.name,
            login: req.body.login,
            password: req.body.password,
            color: req.body.color,
            url: req.body.url,
            desc: req.body.desc,
            fav: req.body.fav,
            author: req.payload.userID
        })

        try {
            await newKey.save()
            res.status(201).json(newKey)
            console.log('Key added');
        } catch(err) {
            
            if(err.errors) {
                res.status(422).json({message: Object.values(err.errors)[0].message})
                //returs message from validator errors  
            } else {
                console.log(err)
                res.sendStatus(500)
            }
        }
    },


}

export default keyController