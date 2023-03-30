let favs = require('../utils/favs');

const deleteFavorite = async req => {
  const { id } = req.params;
  const index = favs.findIndex(object => object.id == id);
  if (index === -1) return [];
  else return favs.splice(index, 1);
};

module.exports = deleteFavorite;
