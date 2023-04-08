const { User } = require('../db');

const createUser = async user => {
  const { email, password } = user;
  if (!email || !password) throw new Error('Missing User data.');

  const newUser = await User.create({
    id: '94c73c16-710a-43fe-84f5-6b8529fec8e9',
    email,
    password,
  });

  return newUser;
};

module.exports = createUser;
