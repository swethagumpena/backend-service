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

const getContentTypesHandler = async (req, res) => {
  try {
    const contentTypesList = await contentService.fetchContentTypes();
    res.status(200).send({ data: contentTypesList });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createContentHandler,
  getContentTypesHandler,
};
