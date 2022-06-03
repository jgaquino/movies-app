import React from "react";
import styles from "./movie-card.module.scss";

const MovieCard = () => {
  return (
    <>
      <div className={styles.MovieCard}>
        <span
          style={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/original/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg')",
          }}
        />
        <h3>Sonic the Hedgehog 2</h3>
        <div>
          <p>
            Release date: <strong>2014-11-19</strong>
          </p>
          <p>
            Language: <strong>EN</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
