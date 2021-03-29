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

const addField = async (typeName, field) => {
  const existingFields = await Content.findOne(
    {
      where: { typeName },
    },
  );
  if (!existingFields) { throw new Error('Content type not found'); }
  let fieldsArr = existingFields.dataValues.fields;
  if (!fieldsArr) {
    fieldsArr = [];
  }
  if (fieldsArr.includes(field)) { throw new Error('Field already exists'); }
  fieldsArr.push(field);
  const updatedContent = await Content.update({ fields: fieldsArr },
    {
      where: { typeName },
      returning: true,
    });
  return updatedContent[1];
};

module.exports = {
  createContent,
  fetchContentTypes,
  addField,
};
