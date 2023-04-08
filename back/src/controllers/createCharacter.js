const { Character } = require('../db');

const createCharacter = async character => {
  const { name, species, gender, status, origin, image } = character;
  if (!name || !species) throw new Error('Missing Character data.');

  let count = 1000;
  const newCharacter = {
    id: ++count,
    name,
    species,
    status,
    origin,
    gender: gender ? gender : null,
    image: image ? image : null,
  };

  await Character.create(newCharacter);

  return newCharacter;
};

module.exports = createCharacter;
