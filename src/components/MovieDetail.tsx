import { useEffect, useState } from "react";
import { apiKey, movieType, watchDataType } from "../types";
import Message from "./Message";
import StarRating from "./StarRating";

type SelectedMovieProps = {
  selectedId: string;
  onBackBtn: () => void;
  watchedMovies: watchDataType[];
  onAddRating: (x: watchDataType) => void;
};

const MovieDetail = ({
  onBackBtn,
  onAddRating,
  selectedId,
  watchedMovies,
}: SelectedMovieProps) => {
  const [movie, setMovie] = useState<movieType | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rating, setRating] = useState<number>(0);

  const isRated = watchedMovies.find((movie) => movie.imdbID === selectedId);

  const handleAdd = () => {
    const newWatchMovie = {
      imdbID: movie?.imdbID,
      Title: movie?.Title,
      Year: movie?.Year,
      Poster: movie?.Poster,
      Runtime: movie?.Runtime?.split(" ")[0],
      imdbRating: movie?.imdbRating,
      userRating: rating,
    };
    onAddRating(newWatchMovie);
  };

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`
      );

      if (!response.ok) throw new Error("Failed to load movie detail");

      const data = await response.json();
      setMovie(data);
      setLoading(false);
    } catch (error: unknown) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  useEffect(() => {
    if (!movie) return;
    document.title = `Movie | ${movie.Title}`;

    return () => {
      document.title = "ebs cinema";
    };
  }, [movie]);

  useEffect(() => {
    const onEscapeKey = (e: KeyboardEvent) => {
      if (e.code === "Escape") onBackBtn();
      // console.log(e.code);
    };
    document.addEventListener("keydown", onEscapeKey);

    return () => {
      document.removeEventListener("keydown", onEscapeKey);
    };
  }, [onBackBtn]);

  return (
    <div className="">
      <button
        className="absolute mx-[-35px] my-[-35px] active:bg-red-800  rounded-full text-4xl"
        onClick={onBackBtn}
      >
        &larr;
      </button>

      {loading && <Message message="Loading..." color="text-blue-600" />}
      {error && <Message message={`⛔ ${error}`} />}
      {!loading && !error && (
        <div className="flex flex-col gap-3 ml-[-30px] pr-2 bg-slate-800">
          <div className="flex">
            <img src={movie?.Poster} alt="not found" className="w-[33%] " />
            <div className="flex flex-col p-5 gap-3 text-slate-300">
              <h1 className="text-xl font-bold ">{movie?.Title}</h1>
              <p className="text-sm">
                {movie?.Released} &bull; {movie?.Runtime}
              </p>
              <p className="text-sm">{movie?.Genre}</p>
              <p className="text-sm">⭐ {movie?.imdbRating} IMDB Rating</p>
            </div>
          </div>

          <div className=" p-5 m-2 flex flex-col justify-center bg-slate-700 rounded-xl">
            {isRated ? (
              <div>
                You rated this movie by{" : "}
                <span className="font-mono font-bold text-yellow-500 ">
                  {isRated.userRating}-🌟
                </span>
              </div>
            ) : (
              <>
                <StarRating
                  onSetRating={setRating}
                  className="w-6 h-6 my-1 text-yellow-500"
                />
                {rating > 0 && (
                  <button
                    className="bg-blue-600 rounded-xl mt-4 py-2 hover:bg-blue-700 active:bg-blue-800"
                    onClick={handleAdd}
                  >
                    Add rating
                  </button>
                )}
              </>
            )}
          </div>

          <div className="px-10 font-sans font-light ">
            <div className="mb-5">{movie?.Plot}</div>
            <div className="mb-5">{movie?.Actors}</div>
            <div className="mb-5">Directed by {movie?.Director}</div>
            <div className="mb-5">BoxOffice {movie?.BoxOffice || "N/A"}</div>
            <div className="mb-5">Award {movie?.Awards || "N/A"}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
