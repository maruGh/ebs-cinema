import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import NumResult from "./components/NumResult";
import Box from "./components/Box";
import MoviesList from "./components/MoviesList";
import WatchList from "./components/WatchList";
import WatchedSummary from "./components/WatchedSummary";
import Search from "./components/Search";
import { watchDataType } from "./types";
import Message from "./components/Message";
import MovieDetail from "./components/MovieDetail";
import useMovies from "./hooks/useMovies";
import useLocalStorage from "./hooks/useLocalStorage";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     Runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

function App() {
  // const [watched, setWatched] = useState<watchDataType[]>(() =>
  //   JSON.parse(localStorage.getItem("watched") || "[]")
  // );
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<null | string>(null);

  const { storedValue: watched, setStoredValue: setWatched } =
    useLocalStorage("watched");
  const { movies, loading, error } = useMovies(query, setSelectedId);

  const handleSelectMovie = (id: string | null) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const handleAddRating = (movie: watchDataType) => {
    setWatched((watch) =>
      watch.find((w) => w.imdbID === movie.imdbID) ? watch : [...watch, movie]
    );
    setSelectedId(null);
  };

  const handleBackDetailsBtn = () => {
    setSelectedId(null);
  };

  const handleDeleteWatchMovie = (id: string | undefined) => {
    const newWatchMovie = [...watched].filter(
      (watched) => watched.imdbID !== id
    );
    setWatched(newWatchMovie);
  };

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <div className="m-6">
      <Nav
        element={
          <>
            <Search query={query} onQuery={setQuery} />
            <NumResult movies={movies} />
          </>
        }
      />

      <Main>
        <Box>
          {loading && <Message message="Loading..." color="text-blue-600" />}
          {error && <Message message={`⛔ ${error}`} />}
          {!loading && !error && (
            <MoviesList
              onSelectMovie={handleSelectMovie}
              selectedId={selectedId}
              movies={movies}
            />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetail
              key={selectedId}
              onAddRating={handleAddRating}
              onBackBtn={handleBackDetailsBtn}
              selectedId={selectedId}
              watchedMovies={watched}
            />
          ) : (
            <>
              <WatchedSummary watches={watched} />
              <WatchList
                watches={watched}
                onDeleteWatchedMovie={handleDeleteWatchMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
