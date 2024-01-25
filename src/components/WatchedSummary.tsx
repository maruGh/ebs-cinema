import { watchDataType } from "../types";
import Movie from "./Movie";

type WatchedSummaryProps = {
  watches: watchDataType[];
};
const WatchedSummary = ({ watches }: WatchedSummaryProps) => {
  const countWatchList = watches.length;
  const avgRate =
    watches.reduce((sum, watch) => (sum += Number(watch.imdbRating)), 0) / 2;
  const avgUserRate =
    watches.reduce((sum, watch) => (sum += watch.userRating), 0) / 2;
  const avgTime =
    watches.reduce((sum, watch) => (sum += Number(watch.Runtime)), 0) / 2;
  return (
    <Movie>
      <div className="shadow-gray-800 shadow-md rounded-md p-5 flex flex-col gap-3 mb-5 ml-[-25px]">
        <div className="font-bold">MOVIES YOU WATCHED</div>
        <div className="flex gap-5 font-light flex-wrap">
          <span>🎬 {countWatchList} movies</span>
          <span>⭐ {avgRate.toFixed(2)}</span>
          <span>🌟 {avgUserRate.toFixed(2)}</span>
          <span>⏰ {avgTime} min</span>
        </div>
      </div>
    </Movie>
  );
};

export default WatchedSummary;
