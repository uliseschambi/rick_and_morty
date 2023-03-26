export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFavorite = character => {
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
};

export const deleteFavorite = id => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
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
