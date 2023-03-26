import React from 'react';
import { connect } from 'react-redux';
import { Div, Span, Select } from './style';
import { filterCards, orderCards } from '../../redux/actions';

const Favorites = props => {
  const order = e => {
    if (e.target.value === 'Ascendente') props.orderCards('Ascendente');
    if (e.target.value === 'Descendente') props.orderCards('Descendente');
  };
  const filter = e => {
    if (e.target.value === 'Male') props.filterCards('Male');
    if (e.target.value === 'Female') props.filterCards('Female');
  };
  return (
    <>
      <Div className="container">
        <Select name="order" onChange={order}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </Select>
        <Select name="filter" onChange={filter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </Select>
      </Div>
      <div>
        {/* {console.log(props.myFavorites)} */}
        {props.myFavorites.map(favorite => (
          <Span key={favorite.id}>
            <h2>{favorite.name}</h2>
            <img src={favorite.image} alt="img" />
          </Span>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    filterCards: gender => dispatch(filterCards(gender)),
    orderCards: id => dispatch(orderCards(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
