import createUser from "../models/UserData.models";
import { validationResult, check } from "express-validator";

/* eslint-disable no-unused-vars */
const registrerUserValidationRules = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("The name is required for this action"),
  check("lastName")
    .not()
    .isEmpty()
    .withMessage("The last name is required for this action"),
  check("email")
    .isEmail()
    .withMessage("This does not comply with the rules for an email"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("The password is required for this action"),
];

const registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, lastName, email, password } = req.body;

  try {
    await createUser(name, lastName, email, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default registerUser;
