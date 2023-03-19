import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 100%;
  height: 100vh; /* falta eliminar scrollbar */
  display: flex; /* para centrar FORM */
  justify-content: center; /* para centrar FORM */
  align-items: center; /* para centrar FORM */
  color: white;
`;

export const DivError = styled.div`
  visibility: ${props => (props.visibility ? 'hidden' : 'visible')};
  font-size: x-small;
  color: white;
  margin: 15px 0 4px 0;
`;

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, #0c94f5, #b234e9);
  background-blend-mode: hard-light;
  border-radius: 30px;
  border: 2px solid grey;
  text-align: center;
  color: white;
  padding: 20px 40px;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: 2px solid #ccff33;
  border-radius: 30px;
  padding: 0.6rem;
  margin: 25px 0px 20px 0px;
`;
