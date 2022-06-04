import React from "react";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import MoviesList from "../../components/movies-list";
import { useGlobalContext } from "../../services/global-state";

const MyList = () => {
  const [{ movies, reviews }] = useGlobalContext();
  const reviewMovies = reviews.map((r) => r.movie);

  return (
    <div>
      <Topbar location="my-list" />
      <MoviesList location="my-list" movies={reviewMovies} />
      <Footer />
    </div>
  );
};

export default MyList;
