import React from 'react';
import { connect } from 'react-redux';
import { Span } from './style';

const Favorites = props => {
  return (
    <>
      {/* verificar no funciona datalist */}
      {/* <input list="browsers" name="myBrowser" />
      <datalist id="ordenamiento">
        <option value="Ascendente" />
        <option value="Descendente" />
      </datalist>
      <input list="browsers" name="myBsrowser" />
      <datalist id="filtrado">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </datalist> */}
      {props.myFavorites.map(favorite => (
        <Span>
          <h2>{favorite.name}</h2>
          <img src={favorite.image} alt="img" />
        </Span>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
