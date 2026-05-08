function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Search complaints by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default SearchBar;