const mongoose = require("mongoose");
const { DB_URL } = require("./variables");

async function connectDB() {
  await mongoose.connect(DB_URL);
  console.log("Db Connected");
}

module.exports = { connectDB };
