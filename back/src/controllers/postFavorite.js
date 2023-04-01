const obj = require('../utils/favs');

const postFavorite = async body => {
  return obj.favs.push(body);
};

module.exports = postFavorite;
