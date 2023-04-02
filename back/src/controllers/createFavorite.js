const obj = require('../utils/favs');
let { favs } = obj;

const createFavorite = async favorite => {
  const { id, name, species, gender, image } = favorite;

  if (!id || !name || !species) throw Error('Faltan datos.');

  const newFavorite = {
    id,
    name,
    species,
    gender: gender ? gender : null,
    image: image ? image : null,
  };

  favs.push(newFavorite);
  obj.favs = favs;

  return newFavorite;
};

module.exports = createFavorite;
