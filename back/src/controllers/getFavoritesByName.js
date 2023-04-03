const obj = require('../utils/favs');
const { favs } = obj; // este favs contiene oldValues

// async emula asincronia
const getFavoritesByName = async name => {
  const favs = obj.favs.filter(fav => {
    return fav.name.includes(name);
  });
  return favs;
};

module.exports = getFavoritesByName;
