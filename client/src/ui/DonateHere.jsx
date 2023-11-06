import React, { useState } from "react";

const donationsCardStyle = {
  backgroundColor: "#f0f0f0",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  margin: "10px",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "10px 0",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const checkboxLabelStyle = {
  display: "block",
  margin: "10px 0",
};

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
};

const DonationsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    fundraisingPlan: "",
    eventDate: "",
    fundraisingAmount: "",
    consentToRecording: false,
    consentToCommunications: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div style={donationsCardStyle}>
      <h2 style={headingStyle}>Fundraising for Hearts To Homes Children's Villages In Kenya</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          style={inputStyle}
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Home Address"
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          style={inputStyle}
          required
        />
        <textarea
          name="fundraisingPlan"
          value={formData.fundraisingPlan}
          onChange={handleChange}
          placeholder="How do you plan to fundraise in aid of Hearts To Homes Children's Villages in Kenya?(Donate Cloathes, Donate Food, Donate Medicines, Donate Money)"
          style={textareaStyle}
          required
        />
        <input
          type="text"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          placeholder="When will your activity/event take place? (mm/dd/yyyy)"
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="fundraisingAmount"
          value={formData.fundraisingAmount}
          onChange={handleChange}
          placeholder="How much are you planning to raise? (Amount in KES)"
          style={inputStyle}
          required
        />
        <div>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="consentToRecording"
              checked={formData.consentToRecording}
              onChange={handleChange}
            />
            I consent to Hearts To Homes Children’s Villages Kenya recording personal information about me
          </label>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="consentToCommunications"
              value="email"
              checked={formData.consentToCommunications.includes("email")}
              onChange={handleChange}
            />
            I would like to receive communications by email
          </label>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="consentToCommunications"
              value="telephone"
              checked={formData.consentToCommunications.includes("telephone")}
              onChange={handleChange}
            />
            I would like to receive communications by telephone
          </label>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="consentToCommunications"
              value="post"
              checked={formData.consentToCommunications.includes("post")}
              onChange={handleChange}
            />
            I would like to receive communications by post
          </label>
        </div>
        <button style={buttonStyle}>Submit</button>
        <h2>*We ask that our donors and fundraisers use our domain www.heartstohomeschildrensvillageskenya.org as the trusted source for donations and not any other.</h2>
      </form>
    </div>
  );
  }

export default DonationsForm;
