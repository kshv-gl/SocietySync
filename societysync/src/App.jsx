import { useState } from "react";
import ComplaintForm from "./components/ComplaintForm.jsx";
import ComplaintCard from "./components/ComplaintCard.jsx";
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

  return (
    <div className="app">
      <h1>SocietySync</h1>

      <ComplaintForm addComplaint={addComplaint} />

      <div className="complaints-container">
        {complaints.map((complaint) => (
          <ComplaintCard
            key={complaint.id}
            complaint={complaint}
          />
        ))}
      </div>
    </div>
  );
}

export default App;