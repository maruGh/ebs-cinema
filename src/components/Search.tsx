const Search = ({
  query,
  onQuery,
}: {
  query: string;
  onQuery: (x: string) => void;
}) => {
  return (
    <input
      value={query}
      onChange={(e) => onQuery(e.target.value)}
      type="text"
      placeholder="Search here ..."
      className="py-3 px-2 md:w-96 rounded-lg bg-blue-900"
    />
  );
};

export default Search;
