export const initialState = {
  movies: undefined,
  configurations: undefined,
  reviews: [],
};

export const globalStateReducer = (state, action) => {
  switch (action.type) {
    case SET_MOVIES_ACTION:
      return { ...state, movies: action.data ? [...action.data] : null };
    case SET_CONFIGURATIONS_ACTION:
      return {
        ...state,
        configurations: action.data ? { ...action.data } : null,
      };

    case ADD_REVIEW_ACTION:
      return {
        ...state,
        reviews: [...state.reviews, { ...action.data }],
      };

    default:
      throw Error(`action.type (${action.type}) provided is not valid`);
  }
};

//
const SET_MOVIES_ACTION = "SET_MOVIES_ACTION";
const SET_CONFIGURATIONS_ACTION = "SET_CONFIGURATIONS_ACTION";

export const GLOBAL_STATE_SET_MOVIES = (movies) => ({
  type: SET_MOVIES_ACTION,
  data: movies,
});
export const GLOBAL_STATE_SET_CONFIGURATIONS = (configurations) => ({
  type: SET_CONFIGURATIONS_ACTION,
  data: configurations,
});

// review
const ADD_REVIEW_ACTION = "ADD_REVIEW_ACTION";

export const GLOBAL_STATE_ADD_REVIEW = (review) => ({
  type: ADD_REVIEW_ACTION,
  data: review,
});
