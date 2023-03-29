import React, { useEffect, useState } from 'react';
import * as actions from '../../redux/actions';
import { Span, Div, H2, Button } from './style';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    // El condicional debería estar en un useEffect.
    isFav
      ? props.deleteFavorite(props.id)
      : props.addFavorite({
          id: props.id,
          name: props.name,
          species: props.species,
          gender: props.gender,
          image: props.image,
          // onClose: props.onClose,
        });
    // Utilizar useEffect cuando cambia un estado.
    setIsFav(!isFav);
  };

  // El hook useEffect es solo para componentes funcionales. El método componentDidUpdate es solo para componentes de clases.
  useEffect(() => {
    props.allCharacters.forEach(favorite => {
      if (favorite.id === props.id) setIsFav(true);
    });
  }, [props.allCharacters]);

  return (
    <Span>
      <Div>
        {isFav ? <button onClick={handleFavorite}>❤️</button> : <button onClick={handleFavorite}>🤍</button>}
        {props.onClose && <Button onClick={() => props.onClose(props.id)}>X</Button>}
      </Div>
      <Link to={`/detail/${props.id}`}>
        <H2>{props.name}</H2>
      </Link>
      <img src={props.image} alt="Here should be the img of a character card" />
      <Div>
        <H2>{props.species}</H2>
        <H2>{props.gender}</H2>
      </Div>
    </Span>
  );
}

function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

function mapDispatchToProps(dispatch) {
  // se pasa dispatch entre funciones
  return {
    addFavorite: function (character) {
      dispatch(actions.addFavorite(character));
    },
    deleteFavorite: function (id) {
      dispatch(actions.deleteFavorite(id));
    },
  };
}

// connect funciona tanto para componentes funcionales como para componentes de clase.
export default connect(mapStateToProps, mapDispatchToProps)(Card);
