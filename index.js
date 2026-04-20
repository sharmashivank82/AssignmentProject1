require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = require("./src/config/variables");

const { rateLimit } = require("express-rate-limit");

const { connectDB } = require("./src/config/dbConnection");
const userRouter = require("./src/routes/user.route");
const statsRouter = require("./src/routes/stats.route");

app.use(express.json());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
});

app.use(limiter);

app.use("/request", userRouter);
app.use("/stats", statsRouter);

app.use((err, req, res, next) => {
  console.log(err);

  res.status(err.status || 500).json({
    message: err.message || "something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

connectDB();
