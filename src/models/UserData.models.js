import { passwordEncryption } from "../utility/Bcrypt";
import { connection } from "../database/database";

const createUser = async (name, lastName, password, email) => {
  try {
    const hashedPassword = await passwordEncryption(password);

    connection.query(
      "INSERT INTO users_table (name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [name, lastName, email, hashedPassword],
      (error, data) => {
        if (error) {
          console.error("Error to insert the task:", error);
        } else {
          console.log("Tasl insercion succesful");
        }
      },
    );
  } catch (error) {
    console.error("Error to code the password:", error);
  }
};

export default createUser;
