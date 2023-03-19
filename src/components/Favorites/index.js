import { Component } from 'react';
import { connect } from 'react-redux';
import { Span } from './style';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { myFavorites } = this.props;
    return (
      <>
        {myFavorites.map(favorite => {
          return (
            <Span>
              <h2>{favorite.name}</h2>
              <img src={favorite.image} alt="img" />
            </Span>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
