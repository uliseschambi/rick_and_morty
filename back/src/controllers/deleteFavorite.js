let favs = require('../utils/favs');

const deleteFavorite = async req => {
  const { id } = req.params;
  favs = favs.filter(char => char.id != id);
  return favs;
};

module.exports = deleteFavorite;
