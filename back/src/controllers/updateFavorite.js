const { favs } = require('../utils/favs');

const updateFavorite = async (id, body) => {
  const fav = favs.find(fav => fav.id == id);

  if (!fav) throw Error('ID not found.');

  const { name, species, gender, image } = body;
  if (![name, species, gender, image].every(Boolean)) throw Error('Faltan datos');

  fav.name = name;
  fav.species = species;
  fav.gender = gender;
  fav.image = image;

  return fav;
};

module.exports = updateFavorite;
