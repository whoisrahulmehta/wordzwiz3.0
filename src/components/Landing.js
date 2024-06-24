import React, { useCallback, useState } from "react";
import Main from "./Main";
import useFetchnew from "./useFetchnew";
import {
  faFileWord,
  faHome,
  faSearch,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashRouter, Link } from "react-router-dom";

function Landing({ theme, handletheme }) {
  const [inputword, setinputword] = useState("");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
    // console.log("handle change active", input);
  }, []);

  const handleSearch = () => {
    if (input) {
      setinputword(input);
      setSearch(true);
    } else {
      alert("Please enter a word in the search box ");
    }
  };
  const handleKeyPress = (event) => {
    if (input) {
      if (event.key === "Enter") {
        console.log("Enter key pressed");
        setinputword(input);
        setInput("");
        setSearch(true);
      }
    }
  };
  const handleHome = () => {
    setInput("");
    setSearch(false);
    console.log("clicked home");
  };
  const { data, isPending, error } = useFetchnew(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${inputword}`,
    0
  );
  // console.log(data );

  return (
    <HashRouter>
      <header>
        <label htmlFor="input">
          <span onClick={handletheme}>
            {theme === "dark" ? (
              <span className={`logo-${theme === "dark" ? "light" : "dark"}`}>
                <FontAwesomeIcon icon={faToggleOn} />
              </span>
            ) : (
              <span
                className={`logo-${theme === "dark" ? "light" : "dark"}  icon`}
              >
                <FontAwesomeIcon icon={faToggleOff} />
              </span>
            )}
          </span>
          <textarea
            placeholder=" Enter a word here "
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          ></textarea>
          <span className="btn" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </label>
      </header>
      {data && search && (
        <Main data={data} error={error} isPending={isPending} />
      )}
      <footer>
        <p onClick={handleHome}>
        <FontAwesomeIcon icon={faFileWord} color="red" />
           WORD<b>Z</b>WI<b>ZZ</b>3.0{search} 
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </p>
      </footer>
    </HashRouter>
  );
}

export default Landing;
