const obj = require('../utils/favs');

const getFavorite = async () => {
  return obj.favs;
};

module.exports = getFavorite;
