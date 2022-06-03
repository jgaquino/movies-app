import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <hr />
      <figure>
        <span>
          <img src="https://jgfrontend.com/wp-content/themes/jgfrontend/src/media/jgfrontend.svg" />
        </span>
        <h1>
          created by{" "}
          <a target="_blank" href="https://jgfrontend.com">
            jgfrontend.com
          </a>
        </h1>
      </figure>
    </footer>
  );
};

export default Footer;
