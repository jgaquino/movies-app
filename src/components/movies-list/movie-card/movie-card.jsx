import React from "react";
import styles from "./movie-card.module.scss";
import { useGlobalContext } from "../../../services/global-state";
import posterNotFound from "../../../assets/poster-holder.jpg";

const MovieCard = ({
  data: { title, poster_path, release_date, original_language },
  onClick,
}) => {
  const [{ configurations }] = useGlobalContext();

  return (
    <div onClick={onClick} className={styles.MovieCard}>
      <span
        style={{
          backgroundImage: `url('${
            poster_path
              ? configurations.baseImagesUrl + poster_path
              : posterNotFound
          }')`,
        }}
      />
      <h3>{title}</h3>
      <div>
        <p>
          Release date: <strong>{release_date}</strong>
        </p>
        <p>
          Language: <strong>{original_language}</strong>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
