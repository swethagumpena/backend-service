const authService = require('../services/auth.service');

const authenticateJwt = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const jwtToken = authHeader.split(' ')[1];
    try {
      const userData = await authService.verifyToken(jwtToken);
      req.user_details = userData.user_details;
      req.username = userData.username;
      next();
    } catch (err) {
      res.status(401).send();
    }
  } else {
    res.status(400).send();
  }
};

module.exports = { authenticateJwt };
