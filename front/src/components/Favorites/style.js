import styled from 'styled-components';

export const Span = styled.span`
  display: inline-block;
  color: #ccff33;
  -webkit-text-stroke: 0.5px #34a0a4;
  letter-spacing: 1px;
  background-image: linear-gradient(to right, #0c94f5, #b234e9);
  background-blend-mode: hard-light;
  border: 2px solid grey;
  margin: 10px;
  text-align: center;
  border-radius: 30px;
  line-height: 0; /* eliminar el espacio debajo de la imagen. */
`;

export const Select = styled.select`
  appearance: none;
  cursor: pointer;
  color: #ccff33;
  background-color: #34a0a4;
  font-size: 1rem; // select no esta heredando
  width: 150px;
  padding: 5px;
  border: 2px solid #ccff33;
  margin: 10px;
`;

export const Img = styled.img`
  border-radius: 0 0 30px 30px;
`;

export const Div = styled.div`
  .select {
    display: flex;
    justify-content: center;
  }
`;
