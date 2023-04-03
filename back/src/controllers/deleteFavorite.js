const obj = require('../utils/favs'); // traigo el objeto para poder pisar a favs.
const { favs } = obj; // este favs contiene oldValues

const deleteFavorite = async id => {
  // splice() es un método mas seguro para eliminar.
  // const index = favs.findIndex(object => object.id == id);
  // if (index === -1) throw Error('ID not found');
  // else return favs.splice(index, 1);

  const fav = obj.favs.find(fav => fav.id == id);

  if (!fav) throw Error('ID not found');

  obj.favs = obj.favs.filter(f => f.id != id);

  return fav;
};

module.exports = deleteFavorite;
