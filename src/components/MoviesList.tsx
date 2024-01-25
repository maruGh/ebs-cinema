import { movieType } from "../types";

import Movie from "./Movie";

type moviesType = {
  movies: movieType[];
  onSelectMovie?: (x: string | null) => void;
  selectedId?: string | null;
};

const MoviesList = ({ movies, onSelectMovie, selectedId }: moviesType) => {
  return (
    <ul className=" flex flex-col gap-4">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectMovie={onSelectMovie}
          selectedId={selectedId}
        >
          <div className="font-bold"> {movie.Title}</div>
          <div className="font-light text-sm">📅 {movie.Year}</div>
        </Movie>
      ))}
    </ul>
  );
};

export default MoviesList;
