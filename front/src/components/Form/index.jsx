import { useState } from 'react';
import { DivContainer, DivError, FORM, Button } from './style';
import validation from './validation';

export const Form = ({ login }) => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleInputChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(validation({ ...userData, [event.target.name]: event.target.value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(userData);
    setUserData({ username: '', password: '' });
    setErrors({ username: '', password: '' });
  };

  return (
    <DivContainer>
      <FORM onSubmit={handleSubmit}>
        {errors.username ? (
          <DivError>{errors.username}</DivError>
        ) : (
          <DivError visibility="true">hidden</DivError>
        )}
        <label htmlFor="username">
          username:
          <input
            type="text"
            name="username"
            onChange={handleInputChange}
            value={userData.username}></input>
        </label>
        {errors.password ? (
          <DivError>{errors.password}</DivError>
        ) : (
          <DivError visibility="true">hidden</DivError>
        )}
        <label htmlFor="password">
          password:
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={userData.password}></input>
        </label>
        <Button>LOGIN</Button>
      </FORM>
    </DivContainer>
  );
};

export default Form;
