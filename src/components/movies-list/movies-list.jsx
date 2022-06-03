import React, { useState, useEffect } from "react";
import MovieCard from "./movie-card/movie-card";
import MovieCardDetails from "./movie-card-details";
import styles from "./movies-list.module.scss";

const MoviesList = ({ movies }) => {
  const [movieId, setMovieId] = useState(null);

  console.log("movieId ", movieId);

  return (
    <>
      <article className={styles.MoviesList}>
        <div>
          {movies &&
            movies.map(
              ({ title, poster_path, release_date, original_language, id }) => (
                <MovieCard
                  key={`movie-card-${id}`}
                  data={{ title, poster_path, release_date, original_language }}
                  onClick={() => setMovieId(id)}
                />
              )
            )}
        </div>
      </article>
      {movieId && (
        <MovieCardDetails
          data={(() => {
            const {
              title,
              poster_path,
              release_date,
              original_language,
              overview,
            } = movies.find((m) => m.id === movieId);
            console.log(movies.find((m) => m.id === movieId));
            return {
              title,
              overview,
              poster_path,
              release_date,
              original_language,
            };
          })()}
          onClose={() => setMovieId(null)}
        />
      )}
    </>
  );
};

export default MoviesList;