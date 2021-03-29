const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Content.init({
    typeName: DataTypes.STRING,
    fields: DataTypes.ARRAY(DataTypes.STRING),
    instances: DataTypes.JSONB,
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};
