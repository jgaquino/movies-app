import React, { useState, useEffect } from "react";
import MovieCard from "./movie-card/movie-card";
import MovieCardDetails from "./movie-card-details";
import styles from "./movies-list.module.scss";
const configurationUrl =
  "https://api.themoviedb.org/3/configuration?api_key=8f781d70654b5a6f2fa69770d1d115a3";

const MoviesList = () => {
  const [configuration, setConfiguration] = useState();
  const [movies, setMovies] = useState({});
  const [url, setUrl] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=1"
      );
      const data = await res.json();

      setMovies(data);
    };
    const fetchConfiguration = async () => {
      const res = await fetch(configurationUrl);
      const data = await res.json();

      setConfiguration(data);
    };

    fetchData().catch(console.error);

    fetchConfiguration().catch(console.error);
  }, []);

  useEffect(() => {
    if (configuration) {
      console.log("configuration ", configuration);
      setUrl(
        configuration.images.base_url + configuration.images.poster_sizes[6]
      );
    }
  }, [configuration]);

  console.log("movies ", movies);

  return (
    <>
      <article className={styles.MoviesList}>
        <div>
          {movies &&
            movies.results &&
            movies.results.map((m) => <MovieCard key={`movie-card-${m.id}`} />)}
        </div>
      </article>

      {false && <MovieCardDetails />}
    </>
  );
};

export default MoviesList;
