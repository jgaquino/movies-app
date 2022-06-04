import React, { useState, useCallback, FormEvent } from "react";
import { IMovie, IReview } from "../../../helpers/entities";
import { useGlobalContext } from "../../../services/global-state/context";
import { GLOBAL_STATE_ADD_REVIEW } from "../../../services/global-state/global-state-reducer";
import { useLocation } from "react-router-dom";
import Rating from "./rating";
import posterNotFound from "../../../assets/poster-holder.jpg";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./movie-card-details.module.scss";

type IProps = { movie: IMovie; onClose: () => void };

const MovieCardDetails: React.FC<IProps> = ({ movie, onClose }) => {
  const location = useLocation();
  const [{ configurations, reviews }, dispatch] = useGlobalContext();
  const {
    poster_path,
    title,
    overview,
    release_date,
    original_language,
    adult,
    popularity,
  } = movie;
  const [review, setReview] = useState<IReview>({
    rating: 3,
    message: "",
    movie,
  });
  const reviewExist = reviews.find((r) => r.movie.id === movie.id) as IReview;

  const submitReview = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(GLOBAL_STATE_ADD_REVIEW(review));
    },
    [review]
  );

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
                  Release date: <strong>{release_date}</strong>
                </p>
                <p>
                  Language: <strong>{original_language}</strong>
                </p>
              </div>
              <div>
                <p>
                  Family friendly: <strong>{adult ? "Si" : "No"}</strong>
                </p>
                <p>
                  Popularity: <strong>{popularity}</strong>
                </p>
              </div>
            </article>
            <hr />

            {!reviewExist && (
              <form onSubmit={submitReview}>
                <p>Your feedback</p>
                <div>
                  <Rating
                    value={review.rating}
                    onChange={(_, newRating) =>
                      setReview({ ...review, rating: newRating })
                    }
                  />
                </div>
                <textarea
                  value={review.message}
                  onChange={(e) =>
                    setReview((prevReview) => ({
                      ...prevReview,
                      message: e.target.value,
                    }))
                  }
                ></textarea>
                <button type="submit">Send feedback</button>
              </form>
            )}
            {reviewExist && location.pathname != "/my-list" && (
              <small>Thank you for your feedback :)</small>
            )}
            {reviewExist && location.pathname === "/my-list" && (
              <section>
                <h3>Your feedback</h3>
                <Rating
                  onChange={() => console.log()}
                  value={reviewExist.rating}
                  readOnly
                />
                <p>{reviewExist.message}</p>
              </section>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
};

export default MovieCardDetails;
