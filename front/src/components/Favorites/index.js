import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import { Div, Select } from './style';
import { getFavorites, filterCards, orderCards } from '../../redux/actions';

const Favorites = ({ myFavorites, getFavorites, orderCards, filterCards }) => {
  useEffect(() => {
    // Trae favoritos solo si no tiene favoritos.
    if (!myFavorites.length) getFavorites();
    filterCards('All');
    orderCards('Ascendente');
  }, []);

  return (
    <>
      <Div className="select">
        <Select name="order" onChange={e => orderCards(e.target.value)}>
          <option value="Ascendente" selected>
            Ascendente
          </option>
          <option value="Descendente">Descendente</option>
        </Select>
        <Select name="filter" onChange={e => filterCards(e.target.value)}>
          <option value="All" selected>
            All
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </Select>
      </Div>
      {myFavorites.map(({ id, name, species, gender, image }) => (
        <Card key={id} id={id} name={name} species={species} gender={gender} image={image} />
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
  return {
    getFavorites: () => dispatch(getFavorites()),
    filterCards: gender => dispatch(filterCards(gender)),
    orderCards: id => dispatch(orderCards(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
