const { createTask } = require("../models/Tasks.models");
const { validationResult, check } = require("express-validator");

/* eslint-disable no-unused-vars */
const createTaskRules = [
  check("title").not().isEmpty().withMessage("The title is obligatory"),
];

const insertTask = (req, res) => {
  // Aplica las reglas de validación a la solicitud
  const errors = validationResult(req);

  // Verifica si hay errores de validación
  if (!errors.isEmpty()) {
    // Si hay errores, envía una respuesta de error al cliente
    return res.status(400).json({ errors: errors.array() });
  }

  // Si no hay errores de validación, procede con la creación de la tarea
  try {
    const { title, description, date, status } = req.body;
    createTask(title, description, date, status);
    res.status(201).json({ message: "Task created with succesful" });
  } catch (error) {
    console.error("Error to create the task:", error);
    res.status(500).json({ message: "Internal error in side-server" });
  }
};

module.exports = { insertTask };
