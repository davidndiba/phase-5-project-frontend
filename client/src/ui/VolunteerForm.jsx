import React, { useState } from "react";
import "../../scss/volunteer.css";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="volunteer-form">
      <h1>Volunteer <span>Here</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Message or Subject"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;

