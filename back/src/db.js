require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const { Sequelize } = require('sequelize');
const userModel = require('./models/User');
const characterModel = require('./models/Character');
const episodeModel = require('./models/Episode');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
);

userModel(sequelize);
characterModel(sequelize);
episodeModel(sequelize);

const { Character, User, Episode } = sequelize.models;

Character.belongsToMany(User, {
  through: 'Favorite',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
User.belongsToMany(Character, {
  through: 'Favorite',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Character.belongsToMany(Episode, {
  through: 'Character_Episode',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Episode.belongsToMany(Character, {
  through: 'Character_Episode',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
