import React from "react";
import Map from "../ui/Map";
import ContactInfo from "../ui/ContactInfo";
// import Footer from "../ui/Footer"
 function Contact() {
  return (
    <div className="contact">
      <ContactInfo />
      <Map />
      {/* <Footer/> */}
    </div>
  );
}
export default Contact;