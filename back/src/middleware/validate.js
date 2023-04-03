const validate = (req, res, next) => {
  const { name, species, gender, image } = req.body;
  if (!name || !species) return res.status(400).json({ erros: 'Validation error.' });
  else next();
};

module.exports = validate;
