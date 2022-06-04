import React from "react";
import { IMovie } from "../../helpers/entities";
import classnames from "classnames";
import MovieCard from "./movie-card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./movies-list.module.scss";

type IProps = {
  location: "home" | "my-list";
  movies: IMovie[] | null;
  loading?: boolean;
  onMovieSelected?: (moveIdSelected: number) => void;
};

const MoviesList: React.FC<IProps> = ({
  location,
  movies,
  loading,
  onMovieSelected,
}) => {
  const noResults = movies && movies.length === 0 && location === "home";
  const noReviews = movies && movies.length === 0 && location === "my-list";

  return (
    <>
      <article
        className={classnames({
          [styles.MoviesList]: true,
          [styles.active]: noResults || noReviews || loading,
        })}
      >
        {!loading && (
          <>
            {movies && (
              <div>
                {movies.map((movie) => (
                  <MovieCard
                    movie={movie}
                    key={`movie-card-${movie.id}`}
                    onClick={() => onMovieSelected && onMovieSelected(movie.id)}
                  />
                ))}
              </div>
            )}
            {noResults && <h6>Sorry! no results found...</h6>}
            {noReviews && (
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
    </>
  );
};

export default MoviesList;
