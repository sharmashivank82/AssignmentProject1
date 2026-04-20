const express = require("express");
const router = express.Router();

const { createUser } = require("../controller/user.controller");
const { visitStatsMiddleware } = require("../middleware/statsMiddleware");

router.post("/", visitStatsMiddleware, createUser);

module.exports = router;
