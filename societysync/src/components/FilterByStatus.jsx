const statuses = ["All", "Pending", "In Progress", "Resolved"];

function FilterByStatus({ selectedStatus, setSelectedStatus }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <strong>Filter by Status: </strong>
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setSelectedStatus(status)}
          style={{
            marginRight: "8px",
            padding: "7px 14px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            background: selectedStatus === status ? "#2563eb" : "#e5e7eb",
            color: selectedStatus === status ? "white" : "black",
          }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default FilterByStatus;