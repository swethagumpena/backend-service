const express = require('express');
const {
  createContentHandler,
  getContentTypesHandler,
  addFieldHandler,
  updateFieldHandler,
  deleteFieldHandler,
} = require('../handlers/content.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');

const contentRouter = express.Router();

contentRouter.post('/', authenticateJwt, createContentHandler);
contentRouter.get('/', authenticateJwt, getContentTypesHandler);
contentRouter.post('/:typeName', authenticateJwt, addFieldHandler);
contentRouter.put('/:typeName', authenticateJwt, updateFieldHandler);
contentRouter.delete('/:typeName', authenticateJwt, deleteFieldHandler);

module.exports = { contentRouter };
