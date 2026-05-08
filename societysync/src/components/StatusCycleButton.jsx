const statusCycle = ["Pending", "In Progress", "Resolved"];

const statusColors = {
  "Pending": "#dc2626",
  "In Progress": "#f59e0b",
  "Resolved": "#16a34a",
};

function StatusCycleButton({ status, onStatusChange }) {
  const handleClick = () => {
    const currentIndex = statusCycle.indexOf(status);
    const nextIndex = (currentIndex + 1) % statusCycle.length;
    onStatusChange(statusCycle[nextIndex]);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: statusColors[status],
        color: "white",
        border: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {status}
    </button>
  );
}

export default StatusCycleButton;