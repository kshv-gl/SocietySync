function ComplaintCounter({ complaints }) {
  const total = complaints.length;
  const pending = complaints.filter(c => (c.status || "Pending") === "Pending").length;
  const inProgress = complaints.filter(c => c.status === "In Progress").length;
  const resolved = complaints.filter(c => c.status === "Resolved").length;

  return (
    <div className="complaint-counter">
      <div className="counter-box total">
        <span className="counter-number">{total}</span>
        <span className="counter-label">Total</span>
      </div>
      <div className="counter-box pending">
        <span className="counter-number">{pending}</span>
        <span className="counter-label">Pending</span>
      </div>
      <div className="counter-box inprogress">
        <span className="counter-number">{inProgress}</span>
        <span className="counter-label">In Progress</span>
      </div>
      <div className="counter-box resolved">
        <span className="counter-number">{resolved}</span>
        <span className="counter-label">Resolved</span>
      </div>
    </div>
  );
}

export default ComplaintCounter;