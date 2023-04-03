const obj = require('../utils/favs');
const { favs } = obj; // este favs contiene oldValues

const updateFavorite = async (id, character) => {
  const fav = obj.favs.find(fav => fav.id == id);

  if (!fav) throw Error('ID not found.');

  const { name, species, gender, image } = character;
  if (![name, species, gender, image].every(Boolean)) throw Error('Faltan datos');

  fav.name = name;
  fav.species = species;
  fav.gender = gender;
  fav.image = image;

  return fav;
};

module.exports = updateFavorite;
