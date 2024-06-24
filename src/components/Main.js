import React from "react";
import {   NavLink, Route, Routes } from "react-router-dom";
import Meanings from "./Meanings";
import Welcomepage from "./Welcomepage";
import Thesaurus from "./Thesaurus";
import NotFound from "./NotFound";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

function Main({data, error, isPending}) {
  return (

      <main>
        <nav>
          <p><NavLink to="/meanings">Meanings</NavLink></p>
          {/* <p><NavLink to="/"><FontAwesomeIcon icon={faHome} /></NavLink></p> */}
          <p><NavLink to= "/thesaurus" >Thesaurus</NavLink></p>
        </nav>
        <Routes>
          <Route path="/" element={<Welcomepage />}/>
          <Route path="/meanings" element={<Meanings data={data} error={error} isPending={isPending} />}/>
          <Route path="/thesaurus" element={<Thesaurus  data={data} error={error} isPending={isPending} />}/>
          <Route path="*/" element={<NotFound />}/>
        </Routes>
      </main>
   
  );
}

export default Main;
