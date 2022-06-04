import React, { useState } from "react";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import MoviesList from "../../components/movies-list";
import { useGlobalContext } from "../../services/global-state/context";
import { IMovie } from "../../helpers/entities";
import MovieCardDetails from "../../components/movies-list/movie-card-details";

const MyList: React.FC = () => {
  const [{ reviews }] = useGlobalContext();
  const [moveIdSelected, setMovieIdSelected] = useState<number | null>(null);
  const reviewedMovies = reviews.map((r) => r.movie) as IMovie[];

  return (
    <div>
      <Topbar location="my-list" />
      <MoviesList
        onMovieSelected={(moveId) => setMovieIdSelected(moveId)}
        location="my-list"
        movies={reviewedMovies}
      />
      {moveIdSelected && (
        <MovieCardDetails
          movie={reviewedMovies.find((m) => m.id === moveIdSelected) as IMovie}
          onClose={() => setMovieIdSelected(null)}
        />
      )}
      <Footer />
    </div>
  );
};

export default MyList;
