import React from "react";
import Topbar from "../../components/topbar";
import Banner from "../../components/banner";
import MoviesList from "../../components/movies-list";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Topbar location="home" />
      <Banner />
      <MoviesList />
      <Footer />
    </>
  );
};

export default Home;
