import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      // copiar el estado anterior siempre, buena práctica.
      return { ...state, myFavorites: [...state.allCharacters, action.payload], allCharacters: [...state.allCharacters, action.payload] };
    }
    case DELETE_FAVORITE: {
      return {
        ...state,
        myFavorites: state.myFavorites.filter(favorite => {
          return favorite.id !== action.payload;
        }),
      };
    }
    case FILTER: {
      return {
        ...state,
        myFavorites: state.allCharacters.filter(favorite => {
          return favorite.gender === action.payload;
        }),
      };
    }
    case ORDER: {
      if (action.payload === 'Ascendente') return { ...state, myFavorites: state.allCharacters.sort((id1, id2) => id1 - id2) };
      if (action.payload === 'Descendente') return { ...state, myFavorites: state.allCharacters.sort((id1, id2) => id1 - id2).reverse };
      break;
    }
    default:
      return { ...state };
  }
};

export default reducer;
