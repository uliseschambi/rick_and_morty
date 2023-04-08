const createUser = require('../controllers/createUser');

const createUserHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await createUser({ email, password });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

module.exports = createUserHandler;
