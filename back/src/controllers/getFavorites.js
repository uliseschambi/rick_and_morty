const obj = require('../utils/favs'); // traer el objeto completo

let { favs } = obj; // favs contiene un oldValue

const getFavorites = async () => {
  // retornar el objeto la propiedad requeridad.
  return obj.favs;
};

module.exports = getFavorites;
