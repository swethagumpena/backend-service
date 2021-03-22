const express = require('express');
const { testHandler } = require('../handlers/test.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');

const testRouter = express.Router();

testRouter.get('/', authenticateJwt, testHandler);

module.exports = { testRouter };
