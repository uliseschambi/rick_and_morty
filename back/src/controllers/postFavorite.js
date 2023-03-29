let favs = require('../utils/favs');

const postFavorite = async req => {
  return favs.push(req.body);
};

module.exports = postFavorite;
