const authService = require('../services/auth.service');

const testHandler = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const loginUser = await authService.verifyToken(token);
    res.status(201).send(loginUser);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  testHandler,
};
