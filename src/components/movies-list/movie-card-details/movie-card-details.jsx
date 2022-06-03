import React from "react";
import Rating from "./rate";
import styles from "./movie-card-details.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const MovieCardDetails = ({ onClose }) => {
  return (
    <div className={styles.MovieCardDetails}>
      <div>
        <span onClick={onClose}>
          <AiFillCloseCircle />
        </span>
        <main>
          <figure
            style={{
              backgroundImage:
                "url('https://image.tmdb.org/t/p/original/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg')",
            }}
          ></figure>
          <aside>
            <h1>The Hunger Games: Mockingjay - Part 1</h1>
            <p>
              Katniss Everdeen reluctantly becomes the symbol of a mass
              rebellion against the autocratic Capitol.
            </p>
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

export default MovieCardDetails;
