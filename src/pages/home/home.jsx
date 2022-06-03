import React from "react";
import Topbar from "../../components/topbar";
import Banner from "../../components/banner";
import MoviesList from "../../components/movies-list";
import Footer from "../../components/footer";
import { useGlobalContext } from "../../services/global-state";

const Home = () => {
  const [{ movies }] = useGlobalContext();

  return (
    <>
      <Topbar location="home" />
      <Banner />
      <MoviesList movies={movies} />
      <Footer />
    </>
  );
};

export default Home;
