let favs = require('../utils/favs');

const deleteFavorite = async id => {
  const index = favs.findIndex(object => object.id == id);
  if (index === -1) throw error;
  else return favs.splice(index, 1);
};

module.exports = deleteFavorite;
