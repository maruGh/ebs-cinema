import React from "react";
import { movieType, watchDataType } from "../types";

type movieTypes = {
  movie?: movieType | watchDataType;
  children: React.ReactNode;
  onSelectMovie?: (x: string | null) => void;
  selectedId?: string | null;
};

const Movie = ({ movie, children, onSelectMovie, selectedId }: movieTypes) => {
  return (
    <li
      className={`flex gap-5 hover:${
        movie ? "bg-slate-800" : ""
      } cursor-pointer ${
        selectedId && movie ? selectedId === movie.imdbID && "bg-slate-800" : ""
      }`}
      onClick={
        onSelectMovie ? () => onSelectMovie(movie?.imdbID || null) : undefined
      }
    >
      {movie && <img src={movie?.Poster} alt="No pic" className="w-10" />}
      <div className="flex flex-col flex-1 gap-2">{children}</div>
    </li>
  );
};

export default Movie;
