const { connection } = require("../database/database");

const createTask = (title, description, date, status) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO tasks_list (title, description, date, status) VALUES (?, ?, ?, ?)",
      [title, description, date, status],
      (error, result) => {
        if (error) {
          console.error("Error al crear la tarea:", error);
          reject(error);
        } else {
          resolve(result);
        }
      },
    );
  });
};

const readAllTasks = (userId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM tasks_list WHERE user_id = ?",
      [userId],
      (error, data) => {
        if (error) {
          console.error("Error al recuperar las tareas:", error);
          reject(error);
        } else {
          resolve(data);
        }
      },
    );
  });
};

module.exports = { createTask, readAllTasks };
