import React from "react";
import { actors } from "../data";

function Actors() {
  const actorElements = actors.map(actor => {
    const movieElements = actor.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <div>
        <h2>{actor.name}</h2>
        {movieElements}
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorElements}
    </div>
  );
}

export default Actors;
