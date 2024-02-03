export const SearchItems = ({ setFilter }) => {
  return (
    <div className="search">
      <label htmlFor="search-input">Search Products</label>
      <input
        id="search-input"
        type="text"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
