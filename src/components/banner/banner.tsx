import React from "react";
import { IMovie } from "../../helpers/entities";
import { useGlobalContext } from "../../services/global-state/context";
import styles from "./banner.module.scss";
import posterNotFound from "../../assets/poster-holder.jpg";

type IProps = { movie: IMovie; onClick?: () => void };

const Banner: React.FC<IProps> = ({
  movie: {
    title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    original_language,
    popularity,
    vote_average,
  },
  onClick,
}) => {
  const [{ configurations }] = useGlobalContext();

  return (
    <header
      className={styles.Banner}
      style={{
        backgroundImage: `url('${
          backdrop_path
            ? configurations.baseImagesUrl + backdrop_path
            : posterNotFound
        }')`,
      }}
    >
      <div>
        <main>
          <h5>{release_date}</h5>
          <h1>{title}</h1>
          <p>{overview}</p>
          <hr style={{ opacity: 0.1 }} />

          <div>
            <div>
              <p>
                Popularity: <strong>{popularity}</strong>
              </p>
              <p>
                Vote average: <strong>{vote_average}</strong>
              </p>
            </div>
            <div>
              <p>
                Release date: <strong>{release_date}</strong>
              </p>
              <p>
                Language: <strong>{original_language}</strong>
              </p>
            </div>
          </div>
        </main>
        <span
          onClick={onClick}
          style={{
            backgroundImage: `url('${
              poster_path
                ? configurations.baseImagesUrl + poster_path
                : posterNotFound
            }')`,
          }}
        />
      </div>
    </header>
  );
};

export default Banner;
