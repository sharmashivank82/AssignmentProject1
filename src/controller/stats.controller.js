const statsModel = require("../models/stats.model");

async function getStats(req, res, next) {
  try {
    const { user_id } = req.query;
    const response = await statsModel
      .findOne({ user_id })
      .select(["count", "_id", "user_id"]);
    res.json({ data: response });
  } catch (err) {
    next(err);
  }
}

module.exports = { getStats };
