const express = require('express');
const {
  createContentHandler,
  getContentHandler,
  getfieldsHandler,
  addFieldHandler,
  updateFieldHandler,
  deleteFieldHandler,
} = require('../handlers/content.handler');
const { authenticateJwt } = require('../middlewares/auth.middleware');

const contentRouter = express.Router();

contentRouter.post('/', authenticateJwt, createContentHandler);
contentRouter.get('/', authenticateJwt, getContentHandler);
contentRouter.get('/:typeName', authenticateJwt, getfieldsHandler);
contentRouter.post('/:typeName', authenticateJwt, addFieldHandler);
contentRouter.put('/:typeName', authenticateJwt, updateFieldHandler);
contentRouter.put('/field/:typeName', authenticateJwt, deleteFieldHandler);

module.exports = { contentRouter };
