import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  Dispatch,
  Reducer,
} from "react";
import { fetchMovies, fetchConfiguration } from "../themoviedb";
import {
  GLOBAL_STATE_SET_MOVIES,
  GLOBAL_STATE_SET_CONFIGURATIONS,
  globalStateReducer,
  initialState,
} from "./global-state-reducer";
import {
  IAppState,
  IMovie,
  IConfigurations,
  IReview,
} from "../../helpers/entities";

type IContext = [
  IAppState,
  Dispatch<{ type: string; data: IMovie[] | IConfigurations | IReview }>
];
const GlobalContext = createContext<IContext>([initialState, () => null]);

type IProps = { children: JSX.Element };

export const GlobalContextProvider: React.FC<IProps> = ({ children }) => {
  const [globalState, dispatch]: IContext = useReducer<Reducer<any, any>>(
    globalStateReducer,
    initialState
  );

  useEffect(() => {
    fetchMovies()
      .then((movies: IMovie[]) => {
        dispatch(GLOBAL_STATE_SET_MOVIES(movies));
      })
      .catch((error) => {
        console.error(`[fetchMovies] ${error}`);
      });

    fetchConfiguration()
      .then((configurations) => {
        dispatch(GLOBAL_STATE_SET_CONFIGURATIONS(configurations));
      })
      .catch((error) => {
        console.error(`[fetchConfiguration] ${error}`);
      });
  }, []);

  if (!globalState.movies) return <p>Movies does not exist</p>;

  return (
    <GlobalContext.Provider value={[globalState, dispatch]}>
      {globalState?.configurations && globalState?.movies && children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
