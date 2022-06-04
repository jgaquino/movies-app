import React, { useState } from "react";
import { IMovie } from "../../helpers/entities";
import { useGlobalContext } from "../../services/global-state/context";
import Topbar from "../../components/topbar";
import Banner from "../../components/banner";
import MoviesList from "../../components/movies-list";
import Footer from "../../components/footer";
import MovieCardDetails from "../../components/movies-list/movie-card-details";
import useSearch from "./useSearch";

const Home: React.FC = () => {
  const [{ movies }] = useGlobalContext();
  const [moveIdSelected, setMovieIdSelected] = useState<number | null>(null);
  const { moviesFiltered, setSearchValue, loading } = useSearch();

  const movieHighlighted = movies?.reduce(function (prev, current) {
    return prev.vote_average > current.vote_average ? prev : current;
  }) as IMovie;

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
