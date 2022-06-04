import React, { useState, useEffect } from "react";
import MovieCard from "./movie-card/movie-card";
import MovieCardDetails from "./movie-card-details";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./movies-list.module.scss";
import { Link } from "react-router-dom";

const MoviesList = ({ location, movies, loading }) => {
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
            {movies && movies.length === 0 && location === "home" && (
              <h6>Sorry! no results found...</h6>
            )}
            {movies && movies.length === 0 && location === "my-list" && (
              <h6>
                You don't rated any movie yet.
                <br />
                <Link to="/">Go back to the movies list</Link>
              </h6>
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
