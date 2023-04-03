const obj = require('../utils/favs');
const { favs } = obj; // este favs contiene oldValues

const getFavorites = async () => {
  // retornar con el objeto de la propiedad requeridad.
  return obj.favs;
};

module.exports = getFavorites;
