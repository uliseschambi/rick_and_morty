const obj = require('../utils/favs');
const { favs } = obj; // este favs contiene oldValues

const createFavorite = async favorite => {
  // crear un id.
  const { id, name, species, gender, image } = favorite;

  if (!name || !species) throw Error('Faltan datos.');

  const newFavorite = {
    id,
    name,
    species,
    gender: gender ? gender : null,
    image: image ? image : null,
  };

  obj.favs.push(newFavorite); // push modifica la referencia de favs, agregar obj.

  return newFavorite;
};

module.exports = createFavorite;
