const bcrypt = require("bcrypt");

const passwordEncryption = async (password) => {
  const encryption = await bcrypt.hash(password, 10);
  return encryption;
};

const passwordValidation = async (password, hashedPassword) => {
  const validation = await bcrypt.compare(password, hashedPassword);
  return validation;
};

module.exports = { passwordEncryption, passwordValidation };
