import { useState } from "react";
import CommunityFeed from "./components/CommunityFeed";
import ComplaintForm from "./components/ComplaintForm.jsx";
import ComplaintCounter from "./components/ComplaintCounter.jsx";
import "./App.css";

function App() {
  const [complaints, setComplaints] = useState([]);

  const addComplaint = (complaint) => {
    setComplaints([
      ...complaints,
      {
        ...complaint,
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        status: "Pending",
        upvotes: 0,
      },
    ]);
  };

  const deleteComplaint = (id) => {
    setComplaints(complaints.filter((c) => c.id !== id));
  };

  // Feature 4: cycle status of a complaint
  const updateStatus = (id, newStatus) => {
    setComplaints(complaints.map((c) =>
      c.id === id ? { ...c, status: newStatus } : c
    ));
  };

  return (
    <div className="app">
      <h1>SocietySync</h1>
      <ComplaintForm addComplaint={addComplaint} />
      <ComplaintCounter complaints={complaints} />
      <div className="complaints-container">
        <CommunityFeed
          complaints={complaints}
          deleteComplaint={deleteComplaint}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
}

export default App;