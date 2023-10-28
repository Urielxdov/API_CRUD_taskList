const express = require("express");
const router = express.Router();

const { registerUser } = require("../../controllers/User.controller");
const { insertTask } = require("../../controllers/Task.controller");

// Data user end-points
router.post("/newUser", registerUser);

// Data task end-points
router.post("/newTask", insertTask);

module.exports = { router };
