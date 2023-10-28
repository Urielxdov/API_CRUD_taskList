const { connection } = require("../database/database");

const createTask = (title, description, date, status) => {
  try {
    connection.query(
      "INSERT INTO tasks_list VALUES (title, description, date, status)",
      [title, description, date, status],
      (error, data) => {
        if (error) console.log("All wrong");
      },
    );
  } catch (e) {
    console.log("Internal error of side-server");
  }
};

module.exports = { createTask };
