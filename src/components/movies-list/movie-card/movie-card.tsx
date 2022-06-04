import React from "react";
import { IMovie } from "../../../helpers/entities";
import { useGlobalContext } from "../../../services/global-state/context";
import posterNotFound from "../../../assets/poster-holder.jpg";
import styles from "./movie-card.module.scss";

type IProps = { movie: IMovie; onClick: () => void };

const MovieCard: React.FC<IProps> = ({ movie, onClick }) => {
  const [{ configurations }] = useGlobalContext();
  const { title, poster_path, release_date, original_language } = movie;

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
