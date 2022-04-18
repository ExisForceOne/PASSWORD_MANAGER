import express from "express";
import keyController from "../controllers/keyController.js";
import auth from "../middlewares/auth.js";
import validMongooseID from "../middlewares/validMongooseID.js";
const keys = express.Router();

keys.get("/", auth, keyController.get);
keys.get("/:id", auth, validMongooseID, keyController.getById);
keys.post("/add", auth, keyController.add);
keys.post("/edit/:id", auth, validMongooseID, keyController.edit);
keys.delete("/:id", auth, keyController.delete);

export default keys;
