import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { myFavorites } = this.props;
    return (
      <>
        {myFavorites.map(favorite => {
          return (
            <div>
              {favorite.name}
              {favorite.image}
            </div>
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
