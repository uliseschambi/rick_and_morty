import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  height: 100vh; /* falta eliminar scrollbar */
  display: flex; /* para centrar FORM */
  justify-content: center; /* para centrar FORM */
  align-items: center; /* para centrar FORM */
`;

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2em;
  width: fit-content;
  background-image: linear-gradient(to right, #0c94f5, #b234e9);
  background-blend-mode: hard-light;
  border-radius: 30px;
  border: 2px solid grey;
  margin: 10px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: 2px solid #c6ff68;
  border-radius: 30px;
  padding: 0.6rem;
  margin: 1em;
`;
