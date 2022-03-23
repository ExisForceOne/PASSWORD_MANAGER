import express from "express";
import userController from "../controllers/userController.js";

const users = express.Router();

users.post('/users/register', userController.register)
users.post('/users/login', userController.login)

export default users