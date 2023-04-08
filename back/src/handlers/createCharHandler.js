const createCharacter = require('../controllers/createCharacter');

// Nunca pasar res o req completo.
// El Handler no sabe lo que hace el Controller.
const createCharHandler = async (req, res) => {
  const { name, species, gender, status, origin, image } = req.body;
  try {
    const newCharacter = await createCharacter({ name, species, gender, status, origin, image });
    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = createCharHandler;
