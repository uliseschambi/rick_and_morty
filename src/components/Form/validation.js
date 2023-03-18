const validation = userData => {
  const errors = {};
  // username
  if (!userData.username) {
    errors.username = 'Por favor complete este campo.';
  } else if (userData.username.length > 35) {
    errors.username = 'Ingrese un email menor a 35 caracteres.';
  } else if (!/\S+@\S+\.\S+/.test(userData.username)) {
    errors.username = 'Por favor ingrese un email válido.';
  } else {
    errors.username = '';
  }
  // password
  if (!userData.password) {
    errors.password = 'Por favor complete este campo.';
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'Debe contener entre 6 y 10 caracteres';
  } else if (!/\d/.test(userData.password)) {
    errors.password = 'Debe contener al menos un número';
  } else {
    errors.password = '';
  }

  return errors;
};

export default validation;
