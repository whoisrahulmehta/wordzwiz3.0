import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loading() {
  return (
    <div className="loading">
      <p className="line"></p>
      <p className="brand">
        WORD<b>Z</b>WI<b>ZZ</b>
        <span> <FontAwesomeIcon icon={faFileWord} /></span>
      </p>
      <p className="line"></p>
    </div>
  );
}

export default Loading;
