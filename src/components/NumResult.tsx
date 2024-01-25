import { movieType } from "../types";

type numResultProps = {
  movies: movieType[];
};

const NumResult = ({ movies }: numResultProps) => {
  return <div className="font-semibold">Found {movies.length} movies</div>;
};

export default NumResult;
