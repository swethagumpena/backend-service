const { Content } = require('../models');

const getInstances = async (typeName, newObj) => {
  const existingInstances = await Content.findOne({
    attributes: ['instances'],
    where: {
      typeName,
    },
  });
  const newArray = [...existingInstances.instances, newObj];
  const newFields = await Content.update({
    instances: newArray,
  }, {
    where: {
      typeName,
    },
    returning: true,
  });
  return newFields[1];
};
module.exports = { getInstances };
