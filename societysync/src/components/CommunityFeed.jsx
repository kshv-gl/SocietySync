import ComplaintCard from "./ComplaintCard";

function CommunityFeed({ complaints, deleteComplaint }) {
  return (
    <div>
      <h2>Community Feed</h2>
      {complaints.map((complaint) => (
        <ComplaintCard
          key={complaint.id}
          complaint={complaint}
          deleteComplaint={deleteComplaint}
        />
      ))}
    </div>
  );
}

export default CommunityFeed;