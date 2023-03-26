import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Div, H2, Button } from './style';
import { Link } from 'react-router-dom';

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then(response => response.json())
      .then(char => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch(err => {
        window.alert('No hay personajes con ese ID');
      });
    return setCharacter({});
  }, [detailId]);

  if (character.name)
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
