import React from "react";

function Thesaurus({ data, error, isPending }) {
  return (
    <div className="cardsSA">
      <section className="cols">
        <h1>Antonyms</h1>
        <ol>
          {data &&
            data.map((groups,gI) =>
              groups.meanings.map((group, ggI) =>
                group.antonyms.map((antonyms, aI) => (
                  <li key={aI}>{gI+1}.{ggI+1}.{ aI+1}.{antonyms}</li>
                ))
              )
            )}
        </ol>
      </section>
      <section className="cols">
        <h1>Synonyms</h1>
        <ol>
          {data &&
            data.map((groups,gI) =>
              groups.meanings.map((group, ggI) =>
                group.synonyms.map((synonyms, sI) => (
                  <li key={sI}>{gI+1}.{ggI+1}.{ sI+1}.{synonyms}</li>
                ))
              )
            )}
        </ol>
      </section>
    </div>
  );
}

export default Thesaurus;
