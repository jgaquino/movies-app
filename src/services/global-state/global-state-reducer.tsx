import {
  IAppState,
  IMovie,
  IConfigurations,
  IReview,
} from "../../helpers/entities";

export const initialState: IAppState = {
  movies: null,
  configurations: { baseImagesUrl: null },
  reviews: [],
};

export type IActions =
  | {
      type: "SET_MOVIES_ACTION";
      data: IMovie[];
    }
  | {
      type: "SET_CONFIGURATIONS_ACTION";
      data: IConfigurations;
    }
  | {
      type: "ADD_REVIEW_ACTION";
      data: IReview;
    };

export const globalStateReducer = (state: IAppState, action: IActions) => {
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
        reviews: [{ ...action.data }, ...state.reviews],
      };

    default:
      console.error(`action.type provided is not valid`);
      return state;
  }
};

// Movies actions
const SET_MOVIES_ACTION = "SET_MOVIES_ACTION";
const SET_CONFIGURATIONS_ACTION = "SET_CONFIGURATIONS_ACTION";
// Reviews actions
const ADD_REVIEW_ACTION = "ADD_REVIEW_ACTION";

export const GLOBAL_STATE_SET_MOVIES = (movies: IMovie[]) => ({
  type: SET_MOVIES_ACTION,
  data: movies,
});
export const GLOBAL_STATE_SET_CONFIGURATIONS = (
  configurations: IConfigurations
) => ({
  type: SET_CONFIGURATIONS_ACTION,
  data: configurations,
});

export const GLOBAL_STATE_ADD_REVIEW = (review: IReview) => ({
  type: ADD_REVIEW_ACTION,
  data: review,
});
