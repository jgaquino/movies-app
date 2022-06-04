import React, { useState, useCallback } from "react";
import { useGlobalContext } from "../../../services/global-state";
import { GLOBAL_STATE_ADD_REVIEW } from "../../../services/global-state/global-state-reducer";
import Rating from "./rating";
import { AiFillCloseCircle } from "react-icons/ai";
import posterNotFound from "../../../assets/poster-holder.jpg";
import styles from "./movie-card-details.module.scss";
import { useLocation } from "react-router-dom";

const MovieCardDetails = ({ data, onClose }) => {
  const location = useLocation();
  const [{ configurations, reviews }, dispatch] = useGlobalContext();
  const [review, setReview] = useState({ rating: 3, message: "", movie: data });
  const reviewExist = reviews.find((r) => r.movie.id === data.id);

  const submitReview = useCallback(
    (e) => {
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
                data.poster_path
                  ? configurations.baseImagesUrl + data.poster_path
                  : posterNotFound
              }')`,
            }}
          ></figure>
          <aside>
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
            <article>
              <div>
                <p>
                  Release date: <strong>{data.release_date}</strong>
                </p>
                <p>
                  Language: <strong>{data.original_language}</strong>
                </p>
              </div>
              <div>
                <p>
                  Family friendly: <strong>{data.adult ? "Si" : "No"}</strong>
                </p>
                <p>
                  Popularity: <strong>{data.popularity}</strong>
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
                      setReview((prevReview) => ({
                        ...prevReview,
                        rating: newRating,
                      }))
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
                <Rating value={reviewExist.rating} readOnly />
                <p>{reviewExist.message}</p>
              </section>
            )}
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
