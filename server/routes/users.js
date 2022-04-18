import express from "express";
import userController from "../controllers/userController.js";

const users = express.Router();

users.post('/register', userController.register)
users.post('/login', userController.login)

export default users