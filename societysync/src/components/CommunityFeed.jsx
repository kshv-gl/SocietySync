import { useState } from "react";
import ComplaintCard from "./ComplaintCard";
import FilterByDepartment from "./FilterByDepartment";
import FilterByStatus from "./FilterByStatus";

function CommunityFeed({ complaints, deleteComplaint }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filtered = complaints.filter((c) => {
    const matchDept = selectedDepartment === "All" || c.department === selectedDepartment;
    const matchStatus = selectedStatus === "All" || (c.status || "Pending") === selectedStatus;
    return matchDept && matchStatus;
  });

  return (
    <div>
      <h2>Community Feed</h2>
      <FilterByDepartment
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />
      <FilterByStatus
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
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