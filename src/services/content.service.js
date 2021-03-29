// const { Op } = require('sequelize');
const { Content } = require('../models');

const createContent = async (typeName) => {
  const createdContent = await Content.create({
    typeName,
  });
  return createdContent;
};

const fetchContentTypes = async () => {
  const contentTypes = await Content.findAll(
    {
      attributes: ['typeName'],
      raw: true,
    },
  );
  return contentTypes;
};

module.exports = {
  createContent,
  fetchContentTypes,
};
