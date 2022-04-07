import express from "express";
import userController from "../controllers/userController.js";

const users = express.Router();

users.post('/api/users/register', userController.register)
users.post('/api/users/login', userController.login)

export default users