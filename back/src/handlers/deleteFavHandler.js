const deleteFavorite = require('../controllers/deleteFavorite');

const deleteFavHandler = async (req, res) => {
  const { id: idUser, email } = req.body.user;
  const { id: idChar, name, gender, species, image } = req.body.character;
  try {
    const newFavorite = await deleteFavorite(
      { idUser, email },
      { idChar, name, gender, species, image }
    );
    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = deleteFavHandler;
