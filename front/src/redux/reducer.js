import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES, GET_CHARACTER_DETAIL, CLEAN_DETAIL, FILTER, ORDER } from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: [],
  characterDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      // copiar el estado anterior siempre, buena práctica.
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    }
    case DELETE_FAVORITE: {
      return {
        ...state,
        myFavorites: state.allCharacters.filter(favorite => {
          return favorite.id !== action.payload;
        }),
        allCharacters: state.allCharacters.filter(favorite => {
          return favorite.id !== action.payload;
        }),
      };
    }
    case GET_FAVORITES: {
      return {
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    }
    case GET_CHARACTER_DETAIL: {
      return {
        ...state,
        characterDetail: action.payload,
      };
    }
    case CLEAN_DETAIL: {
      return {
        ...state,
        characterDetail: {},
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
      // sort() modifica el array original
      if (action.payload === 'Ascendente') return { ...state, myFavorites: [...state.allCharacters].sort((character1, character2) => character1.id - character2.id) };
      if (action.payload === 'Descendente') return { ...state, myFavorites: [...state.allCharacters].sort((character1, character2) => character1.id - character2.id).reverse() };
      break;
    }
    default:
      return { ...state };
  }
};

export default reducer;
