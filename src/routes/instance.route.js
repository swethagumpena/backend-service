const express = require('express');
const {
  putInstanceHandler,
} = require('../handlers/instance.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');

const instanceRouter = express.Router();

instanceRouter.put('/:typeName', authenticateJwt, putInstanceHandler);

module.exports = { instanceRouter };
