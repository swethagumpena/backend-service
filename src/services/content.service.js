const { Content } = require('../models');

const createContent = async (typeName) => {
  const createdContent = await Content.create({
    typeName,
  });
  return createdContent;
};

const fetchContent = async () => {
  const contentTypes = await Content.findAll();
  return contentTypes;
};

const getFields = async (typeName) => {
  const fields = await Content.findOne({
    attributes: ['fields'],
    where: {
      typeName,
    },
  });
  return fields.fields;
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

const updateField = async (typeName, oldField, newField) => {
  const existingFields = await Content.findOne(
    {
      where: { typeName },
    },
  );
  if (!existingFields) { throw new Error('Content type not found'); }
  const fieldsArr = existingFields.dataValues.fields;
  const index = fieldsArr.indexOf(oldField);
  if (index !== -1) {
    fieldsArr[index] = newField;
  }
  const updatedContent = await Content.update({ fields: fieldsArr },
    {
      where: { typeName },
      returning: true,
    });
  return updatedContent;
};

const deleteField = async (typeName, field) => {
  const existingFields = await Content.findOne(
    {
      where: { typeName },
    },
  );
  if (!existingFields) { throw new Error('Content type not found'); }
  const fieldsArr = existingFields.dataValues.fields;

  const updatedFieldsArr = fieldsArr.filter((item) => item !== field);
  const updatedContent = await Content.update({ fields: updatedFieldsArr },
    {
      where: { typeName },
      returning: true,
    });
  return updatedContent;
};

module.exports = {
  createContent,
  fetchContent,
  getFields,
  addField,
  updateField,
  deleteField,
};
