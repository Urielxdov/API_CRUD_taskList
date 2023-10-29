const { passwordEncryption } = require("../utility/Bcrypt");
const connection = require("../database/database");

const createUser = async (name, lastName, password, email) => {
  try {
    const hashedPassword = await passwordEncryption(password);

    // Verificar si el usuario ya existe en la base de datos
    const userExists = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT email FROM users_table WHERE email = ?",
        [email],
        (error, results) => {
          if (error) {
            reject(new Error(`Error to verified the user existence: ${error}`));
          } else {
            resolve(results.length > 0);
          }
        }
      );
    });

    if (userExists) {
      throw new Error("The user already exist in the data base");
    }

    // Si el usuario no existe, procede a la inserción de los datos
    const insertResult = await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO users_table (name, last_name, email, password) VALUES (?, ?, ?, ?)",
        [name, lastName, email, hashedPassword],
        (error, data) => {
          if (error) {
            reject(new Error(`Error ato created user: ${error}`));
          } else {
            delete data.password;
            console.log(data);
            resolve(data);
          }
        }
      );
    });

    // Elimina la contraseña antes de devolver los datos
    delete insertResult.password;
    return insertResult;
  } catch (error) {
    throw new Error(`Error to created the user: ${error.message}`);
  }
};

module.exports = { createUser };
