import React, { useState } from 'react';
import * as actions from '../../redux';
import { Span, Img, H2, Button } from './style';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export function Card({ id, name, species, gender, image, onClose, deleteFavorite, addFavorite }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else if (!isFav) {
      setIsFav(true);
      addFavorite({ id, name, species, gender, image, onClose });
    }
  };

  return (
    <Span>
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

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: character => {
      dispatch(actions.addFavorite(character));
    },

    deleteFavorite: character => {
      dispatch(actions.deleteFavorite(character));
    },
  };
};

export default connect(mapDispatchToProps, null)(Card);
