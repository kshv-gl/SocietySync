import { useState } from "react";

function ComplaintForm({ addComplaint }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    flatNo: "",
    department: "Plumbing",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.flatNo
    ) {
      alert("Please fill all fields");
      return;
    }

    addComplaint(formData);

    setFormData({
      title: "",
      description: "",
      flatNo: "",
      department: "Plumbing",
    });
  };

  return (
    <form className="complaint-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Complaint Title"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Complaint Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="flatNo"
        placeholder="Flat Number"
        value={formData.flatNo}
        onChange={handleChange}
      />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option>Plumbing</option>
        <option>Electricity</option>
        <option>Security</option>
        <option>Cleaning</option>
      </select>

      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintForm;