const obj = require('../utils/favs');
// traigo el objeto para poder pisar a favs

let { favs } = obj;
const deleteFavorite = async id => {
  if (!favs.find(fav => fav.id == id)) throw Error('ID not found');
  // let oldlength = favs.length;
  favs = favs.filter(d => d.id != id);
  // setear obj.favs antes del throw por que favs queda con un oldValue
  obj.favs = favs;
  // if (oldlength === favs.length) throw Error('ID not found');
  return obj.favs;
};

module.exports = deleteFavorite;

// const index = favs.findIndex(object => object.id == id);
// if (index === -1) throw Error('ID not found');
// else return favs.splice(index, 1);
