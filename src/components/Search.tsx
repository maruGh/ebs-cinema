import { useRef } from "react";
import useKey from "../hooks/useKey";

const Search = ({
  query,
  onQuery,
}: {
  query: string;
  onQuery: (x: string) => void;
}) => {
  const inputElement = useRef<HTMLInputElement>(null);

  useKey("Enter", () => {
    if (document.activeElement === inputElement.current) return;
    inputElement.current?.focus();
    onQuery("");
  });

  useKey("Escape", () => {
    inputElement.current?.blur();
  });

  // const listenKeyEnterPress = (e: KeyboardEvent) => {
  //   if (document.activeElement === inputElement.current) return;

  //   if (e.key === "Enter") {
  //     inputElement.current?.focus();
  //     onQuery("");
  //   }
  // };

  // const listESCKeyPress = (e: KeyboardEvent) => {
  //   if (e.key === "Escape") {
  //     inputElement.current?.blur();
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("keydown", listenKeyEnterPress);
  //   document.addEventListener("keydown", listESCKeyPress);
  //   return () => {
  //     document.removeEventListener("keydown", listenKeyEnterPress);
  //     document.removeEventListener("keydown", listESCKeyPress);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <input
      value={query}
      onChange={(e) => onQuery(e.target.value)}
      type="text"
      placeholder="Search here ..."
      ref={inputElement}
      className="py-3 px-2 md:w-96 rounded-lg bg-blue-900"
    />
  );
};

export default Search;
