import express from "express";
import keyController from "../controllers/keyController.js";
import auth from "../middlewares/auth.js";
import validMongooseID from "../middlewares/validMongooseID.js";
const keys = express.Router();

keys.get('/api/keys', auth, keyController.get)
keys.get('/api/keys/:id', auth, validMongooseID, keyController.getById)
keys.post('/api/keys/add', auth, keyController.add)
keys.post('/api/keys/edit/:id', auth, validMongooseID, keyController.edit)
keys.delete('/api/keys/:id', auth, keyController.delete)

export default keys