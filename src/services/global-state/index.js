import React, { createContext, useContext, useReducer, useEffect } from "react";
import { globalStateReducer, initialState } from "./global-state-reducer";
import { fetchMovies, fetchConfiguration } from "../themoviedb";
import {
  GLOBAL_STATE_SET_MOVIES,
  GLOBAL_STATE_SET_CONFIGURATIONS,
} from "./global-state-reducer";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(globalStateReducer, initialState);

  useEffect(() => {
    fetchMovies()
      .then((movies) => {
        dispatch(GLOBAL_STATE_SET_MOVIES(movies));
      })
      .catch((error) => {
        console.error(`[fetchMovies] ${error}`);
        dispatch(GLOBAL_STATE_SET_MOVIES(null));
      });

    fetchConfiguration()
      .then((configurations) => {
        dispatch(GLOBAL_STATE_SET_CONFIGURATIONS(configurations));
      })
      .catch((error) => {
        console.error(`[fetchConfiguration] ${error}`);
        dispatch(GLOBAL_STATE_SET_CONFIGURATIONS(null));
      });
  }, []);

  return (
    <GlobalContext.Provider value={[globalState, dispatch]}>
      {globalState.configurations && globalState.movies && children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
