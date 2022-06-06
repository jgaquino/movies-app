import React, { useMemo, useState } from "react";
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

  const movieHighlighted = movies
    ?.filter((m) => m.backdrop_path)
    .reduce(function (prev, current) {
      return prev.vote_average > current.vote_average ? prev : current;
    }) as IMovie;

  const currentMovies = useMemo(
    () => (moviesFiltered ? moviesFiltered : movies),
    [moviesFiltered, movies]
  );

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
        movies={currentMovies}
        loading={loading}
        onMovieSelected={(moveId) => setMovieIdSelected(moveId)}
      />

      {moveIdSelected && movies && (
        <MovieCardDetails
          movie={currentMovies?.find((m) => m.id === moveIdSelected) as IMovie}
          onClose={() => setMovieIdSelected(null)}
        />
      )}
      <Footer />
    </>
  );
};

export default Home;
