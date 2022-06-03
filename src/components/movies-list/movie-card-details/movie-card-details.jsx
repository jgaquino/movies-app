import React from "react";
import { useGlobalContext } from "../../../services/global-state";
import Rating from "./rate";
import { AiFillCloseCircle } from "react-icons/ai";
import posterNotFound from "../../../assets/poster-holder.jpg";
import styles from "./movie-card-details.module.scss";

const MovieCardDetails = ({
  data: { title, overview, poster_path, release_date, original_language },
  onClose,
}) => {
  const [{ configurations }] = useGlobalContext();

  return (
    <div className={styles.MovieCardDetails}>
      <div>
        <span onClick={onClose}>
          <AiFillCloseCircle />
        </span>
        <main>
          <figure
            style={{
              backgroundImage: `url('${
                poster_path
                  ? configurations.baseImagesUrl + poster_path
                  : posterNotFound
              }')`,
            }}
          ></figure>
          <aside>
            <h1>{title}</h1>
            <p>{overview}</p>
            <article>
              <div>
                <p>
                  Release date: <strong>2014-11-19</strong>
                </p>
                <p>
                  Language: <strong>EN</strong>
                </p>
              </div>
              <div>
                <p>
                  Family friendly: <strong>Si</strong>
                </p>
                <p>
                  Popularity: <strong>105.437</strong>
                </p>
              </div>
            </article>
            <hr />
            <form>
              <p>Your feedback</p>
              <div>
                <Rating />
              </div>
              <textarea></textarea>
              <button>Send feedback</button>
            </form>
          </aside>
        </main>
      </div>
    </div>
  );
};

MovieCardDetails.defaultProps = {
  data: {},
};

export default MovieCardDetails;
