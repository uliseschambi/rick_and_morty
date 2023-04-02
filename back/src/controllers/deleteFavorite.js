const obj = require('../utils/favs');
// traigo el objeto para poder pisar a favs. Traigo favs si uso un método(splice) que cambie un elemento (prop).
let { favs } = obj;

const deleteFavorite = async id => {
  // const index = favs.findIndex(object => object.id == id);
  // if (index === -1) throw Error('ID not found');
  // else return favs.splice(index, 1);

  if (!favs.find(fav => fav.id == id)) throw Error('ID not found');

  favs = favs.filter(f => f.id != id);

  obj.favs = favs;

  return obj.favs;
};

module.exports = deleteFavorite;
