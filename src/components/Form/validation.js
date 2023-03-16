const validation = errors => {
  if (!errors.username) return { ...errors, username: 'Por favor complete este campo.' };
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(errors.username)) return { ...errors, username: 'Por favor ingrese un email válido.' };
  if (errors.username.length > 35) return { ...errors, username: 'Por favor ingrese un email menor a 35 carácteres.' };
  if (!/^[A-Za-z]\w{6,10}$/.test(errors.password)) return { ...errors, password: 'Por favor ingrese una password válida.' };
  return { username: '', password: '' };
};

export default validation;
