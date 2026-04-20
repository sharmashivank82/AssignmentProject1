const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
      unique: true,
    },

    count: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true },
);

const statsModel = mongoose.model("stats", statsSchema);

module.exports = statsModel;
