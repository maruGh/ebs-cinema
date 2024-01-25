import React from "react";

const Nav = ({ element }: { element: React.ReactNode }) => {
  return (
    <nav className="flex justify-between px-10 bg-blue-800 items-center py-3 rounded-lg max-sm:flex-col max-sm:items-center">
      <div className="text-[20px] font-bold">🍿 ebsCinema</div>
      {element}
    </nav>
  );
};

export default Nav;
