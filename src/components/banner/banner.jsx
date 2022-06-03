import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <header
      className={styles.Banner}
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg')",
      }}
    >
      <div>
        <main>
          <h5>2022-03-30</h5>
          <h1>Sonic the Hedgehog 2</h1>
          <p>
            After settling in Green Hills, Sonic is eager to prove he has what
            it takes to be a true hero. His test comes when Dr. Robotnik
            returns, this time with a new partner, Knuckles, in search for an
            emerald that has the power to destroy civilizations. Sonic teams up
            with his own sidekick, Tails, and together they embark on a
            globe-trotting journey to find the emerald before it falls into the
            wrong hands.
          </p>
          <hr style={{ opacity: 0.1 }} />

          <div>
            <div>
              <p>
                Popularity: <strong>99.716</strong>
              </p>
              <p>
                Vote average: <strong>99.716</strong>
              </p>
            </div>
            <div>
              <p>
                Release date: <strong>2014-11-19</strong>
              </p>
              <p>
                Language: <strong>EN</strong>
              </p>
            </div>
          </div>
        </main>
        <span
          style={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/original/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg')",
          }}
        />
      </div>
    </header>
  );
};

export default Banner;
