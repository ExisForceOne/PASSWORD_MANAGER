import express from "express";
import keyController from "../controllers/keyController.js";

const keys = express.Router();

keys.post('/keys/add', keyController.add)
// keys.post('/users/login', userController.login)

export default keys