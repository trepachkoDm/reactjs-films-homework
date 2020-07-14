export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
  genres: [],
  isModal: false,
  trailerURL: '',
  isTrailerLoaded: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case 'SEARCH_MOVIES_GENRES':
      return {
        ...state,
        loading: false,
        genres: action.payload,
      };
    case 'OPEN_MODEL':
      return {
        ...state,
        isModal: action.payload,
      };
    case 'TRAILER_URL':
      return {
        ...state,
        trailerURL: action.payload,
      };
    case 'IS_TRAILER_LOADED':
      return {
        ...state,
        isTrailerLoaded: action.payload,
      };
    default:
      return state;
  }
};
