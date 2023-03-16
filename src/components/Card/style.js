import styled from 'styled-components';

export const Span = styled.span`
  display: inline-block; /* span por default es inline y div por default es block */
  background-image: linear-gradient(to right, #0c94f5, #b234e9);
  background-blend-mode: hard-light;
  border-radius: 30px;
  border: 2px solid grey;
  margin: 10px;
  text-align: center;
  line-height: 0; /* eliminar el espacio debajo de la imagen. */
`;

export const Img = styled.img`
  border-radius: 0 0 30px 30px;
`;

export const H2 = styled.h2`
  color: #1fd0b8;
  -webkit-text-stroke: 1px #c5ea63;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: 2px solid #c6ff68;
  border-radius: 30px;
  width: 2rem;
  padding: 0.5rem;
`;
