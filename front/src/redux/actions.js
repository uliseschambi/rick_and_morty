export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFavorite = character => {
  return function (dispatch) {
    fetch('http://localhost:3001/rickandmorty/fav', {
      method: 'POST',
      body: JSON.stringify(character),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        dispatch({
          type: ADD_FAVORITE,
          payload: character,
        });
      })
      .catch(() => {
        alert('El favorito no se agregó, intente de nuevo por favor.');
      });
  };
};

export const deleteFavorite = id => {
  return function (dispatch) {
    fetch(`http://localhost:3001/rickandmorty/fav/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch({
          type: DELETE_FAVORITE,
          payload: id,
        });
      })
      .catch(() => {
        alert('El favorito no se eliminó, intente de nuevo por favor.');
      });
  };
};

export const getFavorites = () => {
  return function (dispatch) {
    fetch('http://localhost:3001/rickandmorty/fav')
      .then(response => response.json())
      .then(characters => {
        dispatch({
          type: GET_FAVORITES,
          payload: characters,
        });
      })
      .catch(() => {
        alert('Los favoritos no se cargaron correctamente, vuelva a ingresar por favor.');
      });
  };
};

export const getCharacterDetail = id => {
  return function (dispatch) {
    fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
      .then(response => response.json())
      .then(character =>
        dispatch({
          type: GET_CHARACTER_DETAIL,
          payload: character,
        })
      )
      .catch(() => {
        alert('No hay personajes con ese ID');
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterCards = gender => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = order => {
  return {
    type: ORDER,
    payload: order,
  };
};
