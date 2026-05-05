function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Search for a hero or villain..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </section>
  );
}

export default SearchBar;