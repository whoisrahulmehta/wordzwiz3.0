import React from "react";

function Meanings({ data, error, isPending }) {
  // console.log(data);

  return (
    <div className="cardsSA">
      <section className="card">
        {data &&
          data.map((groups, gI) =>
            
            groups.meanings.map((group, ggI) =>
              group.definitions.map((defs, dI) => (
                <div className="" key={dI}> 
                  <p className="definition">
                  {gI+1}.{ggI+1}. {dI+1}. {defs.definition}
                  </p>
                  <p className="ex">
                    {defs.example && "Example :" + defs.example}
                  </p>
                  <br />
                </div>
              ))
            )
          )}
      </section>
    </div>
  );
}

export default Meanings;
