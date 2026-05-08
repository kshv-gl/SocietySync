function FilterByDepartment({ selectedDepartment, setSelectedDepartment }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label><strong>Filter by Department: </strong></label>
      <select
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
        style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      >
        <option value="All">All</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Electricity">Electricity</option>
        <option value="Security">Security</option>
        <option value="Cleaning">Cleaning</option>
      </select>
    </div>
  );
}

export default FilterByDepartment;