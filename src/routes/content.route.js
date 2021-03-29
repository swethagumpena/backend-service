const express = require('express');
const {
  createContentHandler, getContentTypesHandler, addFieldsHandler,
} = require('../handlers/content.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');

const contentRouter = express.Router();

contentRouter.post('/', authenticateJwt, createContentHandler);
contentRouter.get('/', authenticateJwt, getContentTypesHandler);
contentRouter.post('/:typeName', authenticateJwt, addFieldsHandler);
// contentRouter.delete('/:typeName', authenticateJwt, deleteFieldsHandler);

module.exports = { contentRouter };
