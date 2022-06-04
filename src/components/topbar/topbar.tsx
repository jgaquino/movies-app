import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./topbar.module.scss";

type Props = {
  location: "home" | "my-list";
  onChangeSearchValue?: (searchValue: string) => void;
};

const Topbar: React.FC<Props> = ({ location, onChangeSearchValue }) => {
  //search
  const inputSearchRef = useRef<null | HTMLInputElement>(null);
  const [searchOpened, setSearchOpened] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  useEffect(() => {
    searchValue !== "" ? setSearchOpened(true) : setSearchOpened(false);
    onChangeSearchValue && onChangeSearchValue(searchValue);
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
                inputSearchRef.current && inputSearchRef.current.focus();
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
            <Link to="/my-list">My List</Link>
          </>
        )}
        {location === "my-list" && <Link to="/">Go back Home</Link>}
      </div>
    </nav>
  );
};

export default Topbar;
