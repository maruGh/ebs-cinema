import React from "react";
// import MoviesList from "./MoviesList";
// import WatchList from "./WatchList";
// import { movieType, watchDataType } from "../types";

type MainProps = {
  // movies: movieType[];
  // watched: watchDataType[];
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className="my-4 mx-[15%] max-lg:mx-[-1%]">
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        {children}
      </div>
    </main>
  );
};

export default Main;
