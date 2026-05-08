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
      },
    ]);
  };

  // Feature 2: filter out complaint by id
  const deleteComplaint = (id) => {
    setComplaints(complaints.filter((c) => c.id !== id));
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
        />
      </div>
    </div>
  );
}

export default App;