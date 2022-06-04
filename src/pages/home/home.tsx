import React, { useState, useEffect } from "react";
import { IMovie } from "../../helpers/entities";
import { useGlobalContext } from "../../services/global-state/context";
import { fetchMovies } from "../../services/themoviedb";

import Topbar from "../../components/topbar";
import Banner from "../../components/banner";
import MoviesList from "../../components/movies-list";
import Footer from "../../components/footer";
import MovieCardDetails from "../../components/movies-list/movie-card-details";

const Home: React.FC = () => {
  const [{ movies }] = useGlobalContext();
  const [searchValue, setSearchValue] = useState<string>("");
  const [moviesFiltered, setMoviesFiltered] = useState<IMovie[] | null>(null);
  const [moveIdSelected, setMovieIdSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const movieHighlighted = movies?.reduce(function (prev, current) {
    return prev.vote_average > current.vote_average ? prev : current;
  }) as IMovie;

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

  return (
    <>
      <Topbar
        location="home"
        onChangeSearchValue={(newSearchValue) => setSearchValue(newSearchValue)}
      />
      {!loading && !moviesFiltered && (
        <Banner
          onClick={() => setMovieIdSelected(movieHighlighted.id)}
          movie={movieHighlighted}
        />
      )}

      <MoviesList
        location="home"
        movies={moviesFiltered ? moviesFiltered : movies}
        loading={loading}
        onMovieSelected={(moveId) => setMovieIdSelected(moveId)}
      />

      {moveIdSelected && movies && (
        <MovieCardDetails
          movie={movies.find((m) => m.id === moveIdSelected) as IMovie}
          onClose={() => setMovieIdSelected(null)}
        />
      )}
      <Footer />
    </>
  );
};

export default Home;
