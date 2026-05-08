function DeleteButton({ id, deleteComplaint }) {
  return (
    <button
      onClick={() => deleteComplaint(id)}
      style={{
        background: "#dc2626",
        color: "white",
        border: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      🗑️ Delete
    </button>
  );
}

export default DeleteButton;