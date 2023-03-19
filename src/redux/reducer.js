import { ADD_FAVORITE, DELETE_FAVORITE } from './actions';

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      // copiar el estado anterior siempre, buena práctica.
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };
    }
    case DELETE_FAVORITE: {
      return {
        ...state,
        myFavorites: state.myFavorites.filter(favorite => {
          return favorite.id !== action.payload;
        }),
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
