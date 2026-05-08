import DeleteButton from "./DeleteButton";
import UpvoteButton from "./UpvoteButton";
import StatusCycleButton from "./StatusCycleButton";

function ComplaintCard({ complaint, deleteComplaint, updateStatus }) {
  return (
    <div className="complaint-card">
      <h2>{complaint.title}</h2>
      <p>{complaint.description}</p>

      <div className="card-details">
        <span>Flat: {complaint.flatNo}</span>
        <span className={`department ${complaint.department}`}>
          {complaint.department === "Plumbing" && "🔧"}
          {complaint.department === "Electricity" && "⚡"}
          {complaint.department === "Security" && "🛡️"}
          {complaint.department === "Cleaning" && "🧹"}
          {" "}{complaint.department}
        </span>
      </div>

      <small>{complaint.timestamp}</small>

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <UpvoteButton />
        <StatusCycleButton
          status={complaint.status || "Pending"}
          onStatusChange={(newStatus) => updateStatus(complaint.id, newStatus)}
        />
        <DeleteButton id={complaint.id} deleteComplaint={deleteComplaint} />
      </div>
    </div>
  );
}

export default ComplaintCard;