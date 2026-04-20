const userModel = require("../models/user.models");

async function createUser(req, res) {
  if (!req.body.user_id || !req.body.payload) {
    res
      .status(401)
      .json({ message: "Please provide user_id and payload both" });
    return;
  }

  const { user_id, payload } = req.body;

  const response = await userModel.findOne({ user_id });
  if (response?._id) {
    return res.json({ message: "User already exist" });
  }

  const data = await userModel.create({ user_id, payload });

  res.status(200).json({ message: "user created successfully", data });
}

module.exports = { createUser };
