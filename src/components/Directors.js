import React from "react";
import { directors } from "../data";

function Directors() {
  const directorElements = directors.map(director => {
    // const movieElements = director.movies.map(movie => <li key={movie}>{movie}</li>)

    return (
      <div>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => 
            <li key={movie}>
              {movie}
            </li>
          )}
        </ul>
      </div>
    )

  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorElements}
    </div>
  );
}

export default Directors;
