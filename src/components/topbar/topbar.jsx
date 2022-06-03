import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./topbar.module.scss";

const Topbar = ({ location }) => {
  //search
  const inputSearchRef = useRef(null);
  const [searchOpened, setSearchOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    searchValue !== "" ? setSearchOpened(true) : setSearchOpened(false);
  }, [searchValue]);

  return (
    <nav className={styles.Topbar}>
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
      <div>
        {location === "home" && (
          <>
            <div
              className={searchOpened ? styles.active : ""}
              onMouseEnter={() => {
                setSearchOpened(true);
                inputSearchRef.current.focus();
              }}
              onMouseLeave={() => searchValue === "" && setSearchOpened(false)}
            >
              <div>
                <AiOutlineSearch />
                <input
                  ref={inputSearchRef}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
            <a href="">My List</a>
          </>
        )}
        {location === "my-list" && <a href="">Go back Home</a>}
      </div>
    </nav>
  );
};

export default Topbar;
