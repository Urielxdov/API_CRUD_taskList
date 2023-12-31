const { createUser } = require("../models/UserData.models");
const { validationResult, check } = require("express-validator");

const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};

const registerUser = async (req, res) => {
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
  /* eslint-enable */

  handleValidationErrors(req, res);

  const { name, lastName, email, password } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userData = await createUser(name, lastName, email, password);
    console.log(userData);
    res.status(201).json({ data: userData });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { registerUser };
