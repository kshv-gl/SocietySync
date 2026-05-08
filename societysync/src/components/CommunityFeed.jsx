import { useState } from "react";
import ComplaintCard from "./ComplaintCard";
import FilterByDepartment from "./FilterByDepartment";

function CommunityFeed({ complaints, deleteComplaint }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filtered = complaints.filter((c) =>
    selectedDepartment === "All" ? true : c.department === selectedDepartment
  );

  return (
    <div>
      <h2>Community Feed</h2>
      <FilterByDepartment
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />
      {filtered.map((complaint) => (
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