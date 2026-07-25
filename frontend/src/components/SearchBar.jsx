import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search groceries, food & more..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="search-btn">
        🔍
      </button>
    </div>
  );
}

export default SearchBar;