const instanceService = require('../services/instance.service');

const putInstanceHandler = async (req, res) => {
  const { typeName } = req.params;
  const { newObj } = req.body;
  try {
    const instances = await instanceService.getInstances(typeName, newObj);
    res.status(200).json({ data: instances });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};
module.exports = { putInstanceHandler };
