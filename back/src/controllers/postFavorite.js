let favs = require('../utils/favs');

const postFavorite = async body => {
  return favs.push(body);
};

module.exports = postFavorite;
