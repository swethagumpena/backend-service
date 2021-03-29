const contentService = require('../services/content.service');

// add typeName
const createContentHandler = async (req, res) => {
  try {
    const createdContent = await contentService.createContent(req.body.typeName);
    res.status(200).json({ data: createdContent });
  } catch (error) {
    res.status(500).send();
  }
};

// get all typeNames
const getContentTypesHandler = async (req, res) => {
  try {
    const contentTypesList = await contentService.fetchContentTypes();
    res.status(200).send({ data: contentTypesList });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// add new field based on contentType
const addFieldHandler = async (req, res) => {
  try {
    const addedFieldContent = await contentService.addField(req.params.typeName, req.body.field);
    res.status(200).send({ data: addedFieldContent });
  } catch (error) {
    if (error.message === 'Content type not found' || error.message === 'Field already exists') {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

const updateFieldHandler = async (req, res) => {
  try {
    const updatedField = await contentService.updateField(
      req.params.typeName, req.body.oldField, req.body.newField,
    );
    res.status(200).send({ data: updatedField });
  } catch (error) {
    if (error.message === 'Content type not found') {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

const deleteFieldHandler = async (req, res) => {
  try {
    const deletedField = await contentService.deleteField(req.params.typeName, req.body.field);
    res.status(200).send({ data: deletedField });
  } catch (error) {
    if (error.message === 'Content type not found') {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = {
  createContentHandler,
  getContentTypesHandler,
  addFieldHandler,
  updateFieldHandler,
  deleteFieldHandler,
};
