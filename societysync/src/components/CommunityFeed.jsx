import { useState } from "react";
import ComplaintCard from "./ComplaintCard";
import FilterByDepartment from "./FilterByDepartment";
import FilterByStatus from "./FilterByStatus";
import SearchBar from "./SearchBar";

function CommunityFeed({ complaints, deleteComplaint, updateStatus }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = complaints.filter((c) => {
    const matchDept = selectedDepartment === "All" || c.department === selectedDepartment;
    const matchStatus = selectedStatus === "All" || (c.status || "Pending") === selectedStatus;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDept && matchStatus && matchSearch;
  });

  return (
    <div>
      <h2>Community Feed</h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
}

export default CommunityFeed;