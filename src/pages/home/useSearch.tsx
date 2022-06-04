import { useEffect, useState } from "react";
import { IMovie } from "../../helpers/entities";
import { fetchMovies } from "../../services/themoviedb";

const useSearch = () => {
  const [moviesFiltered, setMoviesFiltered] = useState<IMovie[] | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (searchValue === "") {
      setLoading(false);
      setMoviesFiltered(null);
    }

    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {
      if (searchValue === "") return;

      fetchMovies(searchValue)
        .then((moviesSearched: IMovie[]) => {
          setLoading(false);
          setMoviesFiltered(moviesSearched);
        })
        .catch(() => {
          setLoading(false);
          setMoviesFiltered(null);
        });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  return { moviesFiltered, setSearchValue, loading };
};

export default useSearch;
