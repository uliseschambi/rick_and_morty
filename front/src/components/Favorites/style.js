import styled from 'styled-components';

export const Span = styled.span`
  display: inline-block;
  color: #ccff33;
  -webkit-text-stroke: 0.5px #34a0a4;
  letter-spacing: 1px;
`;

export const Datalist = styled.datalist``;

// para el uso de classname probar con props
export const Div = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }

  .ordenamiento {
  }

  /* ${props => `
    .${props.className}{
      display: inline-block;
      border: 2px solid hotpink;
      padding: 16px;
      margin-bottom: 8px;
      }
  `} */
`;
