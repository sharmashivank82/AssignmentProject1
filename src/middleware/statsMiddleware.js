const statsModel = require("../models/stats.model");

const visitStatsMiddleware = async (req, res, next) => {
  try {
    const { user_id } = req.body;
    const isDataExist = await statsModel.findOneAndUpdate(
      { user_id },
      { $inc: { count: 1 } },
      { upsert: true, new: true },
    );
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { visitStatsMiddleware }