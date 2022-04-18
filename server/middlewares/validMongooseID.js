import mongoose from "mongoose";

function validMongooseID(req, res, next) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid key ID" });
    return;
  } else {
    next();
  }
}

export default validMongooseID;
