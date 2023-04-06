import useCharacter from '../../hooks/useCharacter';
import { Div, H2, Button } from './style';
import { Link } from 'react-router-dom';

const Detail = () => {
  const character = useCharacter();

  // Salvar el error de "cannot read property of undefined" con optional chaining operator.
  if (character?.name)
    return (
      <>
        <Div>
          <span>
            <h1>NOMBRE: {character.name}</h1>
            <h2>STATUS: {character.status}</h2>
            <h2>SPECIES: {character.species}</h2>
            <h2>GENDER: {character.gender}</h2>
            <h2>ORIGIN: {character.origin.name}</h2>
          </span>
          <img src={character.image} alt="Img of the character" />
        </Div>
        <Link to="/home">
          <Button>VOLVER</Button>
        </Link>
      </>
    );
  else return <H2>Loading...</H2>;
};

export default Detail;
