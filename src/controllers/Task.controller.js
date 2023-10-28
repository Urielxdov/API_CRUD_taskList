const { createTask, readAllTasks } = require("../models/Tasks.models");
const { validationResult, check } = require("express-validator");

const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};

const insertTask = (req, res) => {
  /* eslint-disable no-unused-vars */
  const createTaskRules = [
    check("title").not().isEmpty().withMessage("The title is obligatory"),
  ];
  /* eslint-enable */

  handleValidationErrors(req, res);

  const { title, description, date, status } = req.body;

  createTask(title, description, date, status)
    .then((data) =>
      res.status(201).json({ message: "Task created successfully" }),
    )
    .catch((e) => res.status(500).json({ message: "Internal server error" }));
};

const showAllTasks = async (req, res) => {
  /* eslint-disable no-unused-vars */
  const showTaskRules = [
    check("userId")
      .not()
      .isEmpty()
      .withMessage("The user id is necessary to that action"),
  ];
  /* eslint-enable */

  handleValidationErrors(req, res);

  const { userId } = req.params;
  readAllTasks(userId)
    .then((data) => res.status(201).json({ tasks: data }))
    .catch((e) => res.status(500).json({ message: "Internal server error" }));
};

module.exports = { insertTask, showAllTasks };
