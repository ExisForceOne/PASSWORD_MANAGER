import express from "express";
import keyController from "../controllers/keyController.js";
import auth from "../middlewares/auth.js";
import validMongooseID from "../middlewares/validMongooseID.js";
const keys = express.Router();

keys.get('/keys', auth, keyController.get)
keys.get('/keys/:id', auth, validMongooseID, keyController.getById)
keys.post('/keys/add', auth, keyController.add)
keys.post('/keys/edit/:id', auth, validMongooseID, keyController.edit)
keys.delete('/keys/:id', auth, keyController.delete)

export default keys