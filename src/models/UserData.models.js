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
          console.error("Error al insertar la tarea:", error);
        } else {
          console.log("Tarea insertada con éxito");
        }
      },
    );
  } catch (error) {
    console.error("Error al cifrar la contraseña:", error);
  }
};

export default createUser;
