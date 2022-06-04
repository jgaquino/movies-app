import React, { useState, useEffect } from "react";
import MovieCard from "./movie-card/movie-card";
import MovieCardDetails from "./movie-card-details";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./movies-list.module.scss";

const MoviesList = ({ movies, loading }) => {
  const [movieId, setMovieId] = useState(null);

  return (
    <>
      <article className={styles.MoviesList}>
        {!loading && (
          <>
            {movies && (
              <div>
                {movies.map(
                  ({
                    title,
                    poster_path,
                    release_date,
                    original_language,
                    id,
                  }) => (
                    <MovieCard
                      key={`movie-card-${id}`}
                      data={{
                        title,
                        poster_path,
                        release_date,
                        original_language,
                      }}
                      onClick={() => setMovieId(id)}
                    />
                  )
                )}
              </div>
            )}
            {movies && movies.length === 0 && (
              <h6>Sorry! no results found...</h6>
            )}
          </>
        )}
        {loading && (
          <span>
            <AiOutlineLoading3Quarters />
          </span>
        )}
      </article>
      {movieId && (
        <MovieCardDetails
          data={(() => {
            const {
              title,
              overview,
              poster_path,
              release_date,
              original_language,
              adult,
              popularity,
              id,
            } = movies.find((m) => m.id === movieId);
            return {
              title,
              overview,
              poster_path,
              release_date,
              original_language,
              adult,
              popularity,
              id,
            };
          })()}
          onClose={() => setMovieId(null)}
        />
      )}
    </>
  );
};

export default MoviesList;
