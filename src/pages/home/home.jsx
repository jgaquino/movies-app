import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar";
import Banner from "../../components/banner";
import MoviesList from "../../components/movies-list";
import Footer from "../../components/footer";
import { useGlobalContext } from "../../services/global-state";
import { fetchMovies } from "../../services/themoviedb";

const Home = () => {
  const [{ movies }] = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");
  const [moviesFiltered, setMoviesFiltered] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const movieHighlighted = movies.reduce(function (prev, current) {
    return prev.vote_average > current.vote_average ? prev : current;
  });

  useEffect(() => {
    setLoading(true);
    if (searchValue === "") {
      setLoading(false);
      setMoviesFiltered(undefined);
    }

    let timeout;
    timeout = setTimeout(() => {
      if (searchValue === "") return;

      fetchMovies(searchValue)
        .then((moviesSearched) => {
          setLoading(false);
          setMoviesFiltered(moviesSearched.results);
        })
        .catch(() => {
          setLoading(false);
          setMoviesFiltered(null);
        });
    }, [1000]);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  console.log(loading);

  return (
    <>
      <Topbar
        location="home"
        onChangeSearchValue={(newSearchValue) => setSearchValue(newSearchValue)}
      />
      {!loading && moviesFiltered === undefined && (
        <Banner movie={movieHighlighted} />
      )}
      <MoviesList
        movies={moviesFiltered === undefined ? movies : moviesFiltered}
        loading={loading}
      />
      <Footer />
    </>
  );
};

export default Home;
