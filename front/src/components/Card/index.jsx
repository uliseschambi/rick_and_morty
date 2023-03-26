import React, { useEffect, useState } from 'react';
import * as actions from '../../redux/actions';
import { Span, Img, H2, Button } from './style';
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
          onClose: props.onClose,
        });
    // Utilizar useEffect cuando cambia un estado.
    setIsFav(!isFav);
  };

  // El hook useEffect es solo para componentes funcionales. El método componentDidUpdate es solo para componentes de clases.
  useEffect(() => {
    props.myFavorites.forEach(favorite => {
      if (favorite.id === props.id) setIsFav(true);
    });
  }, [props.myFavorites]);

  return (
    <Span>
      {isFav ? <button onClick={handleFavorite}>❤️</button> : <button onClick={handleFavorite}>🤍</button>}
      <Button onClick={() => props.onClose(props.id)}>X</Button>
      <Link to={`/detail/${props.id}`}>
        <H2>{props.name}</H2>
      </Link>
      <H2>{props.species}</H2>
      <H2>{props.gender}</H2>
      <Img src={props.image} alt="Here should be the img of a character card" />
    </Span>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
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
