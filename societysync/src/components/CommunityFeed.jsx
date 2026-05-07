import ComplaintCard from "./ComplaintCard";

function CommunityFeed({ complaints }) {
  return (
    <div>
      <h2>Community Feed</h2>

      {complaints.map((complaint, index) => (
        <ComplaintCard
          key={index}
          complaint={complaint}
        />
      ))}
    </div>
  );
}

export default CommunityFeed;