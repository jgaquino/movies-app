import React from "react";
import Topbar from "../../components/topbar";
import Banner from "../../components/banner";
import MoviesList from "../../components/movies-list";
import Footer from "../../components/footer";
import { useGlobalContext } from "../../services/global-state";

const Home = () => {
  const [{ movies }] = useGlobalContext();

  const movieHighlighted = movies.reduce(function (prev, current) {
    return prev.vote_average > current.vote_average ? prev : current;
  });

  return (
    <>
      <Topbar location="home" />
      <Banner movie={movieHighlighted} />
      <MoviesList movies={movies} />
      <Footer />
    </>
  );
};

export default Home;
