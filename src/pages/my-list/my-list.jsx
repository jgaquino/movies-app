import React from "react";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import MoviesList from "../../components/movies-list";
import { useGlobalContext } from "../../services/global-state";

const MyList = () => {
  const [{ movies, reviews }] = useGlobalContext();

  console.log(reviews, movies);
  return (
    <div>
      <Topbar location="my-list" />
      <MoviesList movies={movies} />
      <Footer />
    </div>
  );
};

export default MyList;
