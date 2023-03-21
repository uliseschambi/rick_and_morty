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
  color: #ccff33;
  -webkit-text-stroke: 0.5px #34a0a4;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: 2px solid #ccff33;
  border-radius: 30px;
  width: 2rem;
  padding: 0.5rem;
`;
