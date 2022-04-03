import express from "express";
import keyController from "../controllers/keyController.js";
import auth from "../middlewares/auth.js";
const keys = express.Router();

keys.post('/keys/add', auth, keyController.add)
// keys.post('/users/login', userController.login)

export default keys