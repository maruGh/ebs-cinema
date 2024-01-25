import { watchDataType } from "../types";
import Movie from "./Movie";

type watchListTypes = {
  watches: watchDataType[];
  onDeleteWatchedMovie: (id: string | undefined) => void;
};

const WatchList = ({ watches, onDeleteWatchedMovie }: watchListTypes) => {
  return (
    <ul className="flex flex-col gap-4 ">
      <>
        {/* <WatchedSummary watches={watches} /> */}
        {watches.map((watch) => (
          <Movie movie={watch} key={watch.imdbID}>
            <div className="font-bold">{watch.Title}</div>
            <div className="font-light flex flex-wrap gap-5 text-sm">
              <span>⭐ {watch.imdbRating}</span>
              <span>🌟 {watch.userRating}</span>
              <span>⏰ {watch.Runtime}</span>
              <button
                onClick={() => onDeleteWatchedMovie(watch.imdbID)}
                className="ml-[50%] mt-[-5%] rounded-xl p-2 font-normal 
                        text-red-600  absolute hover:bg-red-600 hover:transition-all 
                        hover:text-white outline outline-2 active:bg-red-900"
              >
                Delete
              </button>
            </div>
          </Movie>
        ))}
      </>
    </ul>
  );
};

export default WatchList;
