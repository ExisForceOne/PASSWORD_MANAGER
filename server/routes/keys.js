import express from "express";
import keyController from "../controllers/keyController.js";
import auth from "../middlewares/auth.js";
const keys = express.Router();

keys.get('/keys', auth, keyController.get)
keys.post('/keys/add', auth, keyController.add)

export default keys