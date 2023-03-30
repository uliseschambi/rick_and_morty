import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { Div, Span, Select, Img } from './style';
import { filterCards, orderCards } from '../../redux/actions';

const Favorites = ({ myFavorites, orderCards, filterCards }) => {
  return (
    <>
      <Div className="select">
        <Select name="order" onChange={e => orderCards(e.target.value)}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </Select>
        <Select name="filter" onChange={e => filterCards(e.target.value)}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </Select>
      </Div>
      <>
        {myFavorites.map(({ id, name, species, gender, image }) => (
          <Card key={id} id={id} name={name} species={species} gender={gender} image={image} />
        ))}
      </>
      {/* <div>
        {myFavorites.map(favorite => (
          <Span key={favorite.id}>
            <h2>{favorite.name}</h2>
            <Img src={favorite.image} alt="img" />
          </Span>
        ))}
      </div> */}
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
