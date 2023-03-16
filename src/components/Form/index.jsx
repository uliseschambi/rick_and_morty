import { useState } from 'react';
import { Div, FORM, Button } from './style';
import validation from './validation';

export const Form = ({ login }) => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleInputChange = event => {
    // pasar el mismo objeto es equivalente a usar una callback
    setUserData({ ...userData, [event.target.name]: event.target.value });
    handleErrors({ ...errors, [event.target.name]: event.target.value });
  };

  const handleErrors = state => {
    // buena práctica usar callback ya que se obtiene el actual value de un state
    setErrors(validation(state));
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(userData);
  };

  return (
    <Div>
      <FORM onSubmit={handleSubmit}>
        <label htmlFor="name">
          username
          <input value={userData.username} onChange={handleInputChange} type="text" name="username"></input>
        </label>
        <label htmlFor="password">
          password
          <input value={userData.password} onChange={handleInputChange} type="password" name="password"></input>
        </label>
        <Button>LOGIN</Button>
      </FORM>
    </Div>
  );
};

export default Form;
