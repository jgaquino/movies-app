import React from "react";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import MoviesList from "../../components/movies-list";
import { useGlobalContext } from "../../services/global-state";

const MyList = () => {
  const [{ movies, reviews }] = useGlobalContext();

  const moviesWithReview = movies.filter((m) =>
    reviews.find((r) => r.id === m.id)
  );
  return (
    <div>
      <Topbar location="my-list" />
      <MoviesList movies={moviesWithReview} />
      <Footer />
    </div>
  );
};

export default MyList;
