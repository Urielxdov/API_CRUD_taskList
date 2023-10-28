import createUser from "../models/UserData.models";

const registerUser = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  if (!name || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ message: "Por favor, proporcione todos los datos requeridos." });
  }

  try {
    await createUser(name, lastName, email, password);
    res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default registerUser;
