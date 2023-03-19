import React, { useEffect, useState } from 'react';
import * as actions from '../../redux/actions';
import { Span, Img, H2, Button } from './style';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Card({ id, name, species, gender, image, onClose, myFavorites, deleteFavorite, addFavorite }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    // buena práctica utilizar callback en setState ya que se obtiene el newValue de state inmediatamente para ser utilizado.
    setIsFav(oldValue => !oldValue);
    isFav ? deleteFavorite(id) : addFavorite({ id, name, species, gender, image, onClose });
  };

  useEffect(() => {
    myFavorites.forEach(favorite => setIsFav(favorite.id === id));
  }, [myFavorites]);

  return (
    <Span>
      {isFav ? <button onClick={handleFavorite}>❤️</button> : <button onClick={handleFavorite}>🤍</button>}
      <Button onClick={() => onClose(id)}>X</Button>
      <Link to={`/detail/${id}`}>
        <H2>{name}</H2>
      </Link>
      <H2>{species}</H2>
      <H2>{gender}</H2>
      <Img src={image} alt="Here should be the img of a character card" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
// connect funciona tanto para componentes funcionales como para componentes de clase.
