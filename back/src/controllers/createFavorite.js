const obj = require('../utils/favs');

const createFavorite = async body => {
  return obj.favs.push(body);
};

module.exports = createFavorite;
