import React from "react";
import { movies } from "../data";

function Movies() {
  const movieElements = movies.map(movie => 
    {
      const genreElements = movie.genres.map(genre => <li key={genre}>{genre}</li>)
      
      return (
        <div>
          <h2>{movie.title} [{movie.time} minutes]</h2>
          <ul>
            {genreElements}
          </ul>
        </div>
      )
    }
  )
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movieElements}
    </div>
  );
}

export default Movies;
