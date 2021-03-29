const express = require('express');
const { createContentHandler, getContentTypesHandler } = require('../handlers/content.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');

const contentRouter = express.Router();

contentRouter.post('/', authenticateJwt, createContentHandler);
contentRouter.get('/', authenticateJwt, getContentTypesHandler);

module.exports = { contentRouter };
