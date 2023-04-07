const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    'Character',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM('Alive', 'Dead', 'Unknown'),
        defaultValue: 'Alive',
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        validate: { isUrl: true },
      },
    },
    {
      freezeTableName: true, // el nombre del modelo es igual al nombre de la tabla en la db
      timestamps: false, // elimina los campos createdAt y updatedAt en la db
    }
  );
};
