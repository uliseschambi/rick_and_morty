const { User, Character } = require('../db');

const addFavorite = async ({ idUser, email }, { idChar, name, species, gender, image }) => {
  if (!idUser || !email) throw new Error('Missing User data.');
  if (!idChar || !name || !species) throw new Error('Missing Character data.');

  // const newFavorite = {
  //   id,
  //   name,
  //   species,
  //   gender: gender ? gender : null,
  //   image: image ? image : null,
  // };

  // pasar a then
  const user = await User.findByPk(idUser);
  const character = await Character.findByPk(idChar);

  await user.addCharacter(character); // método creado a partir de las relaciones de las tablas

  return character;
};

module.exports = addFavorite;
