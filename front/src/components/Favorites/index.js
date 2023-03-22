import React from 'react';
import { connect } from 'react-redux';
import { Span, Div, Datalist } from './style';

const Favorites = props => {
  return (
    <Div className="container">
      <div>
        <input list="ordenamiento" name="ordenamiento" />
        <Datalist id="ordenamiento">
          <option value="Ascendente" />
          <option value="Descendente" />
        </Datalist>
        <input list="filtrado" name="filtrado" />
        <Datalist id="filtrado">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </Datalist>
      </div>
      <div>
        {props.myFavorites.map(favorite => (
          <Span>
            <h2>{favorite.name}</h2>
            <img src={favorite.image} alt="img" />
          </Span>
        ))}
      </div>
    </Div>
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
