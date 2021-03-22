const authService = require('../services/auth.service');

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const jwtToken = authHeader.split(' ')[1];
    const isVerified = authService.verifyMockToken(jwtToken);
    if (isVerified) next();
    else res.status(401).send();
  } else {
    res.status(400).send();
  }
};

module.exports = { authenticateJwt };
