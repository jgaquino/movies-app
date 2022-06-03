export const initialState = {
  movies: undefined,
  configurations: undefined,
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
    default:
      throw Error(`action.type (${action.type}) provided is not valid`);
  }
};

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
