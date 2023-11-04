import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OurMission() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch("/makeup_services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>Our Mission</h1>
      <p>This is where you can provide detailed information about your mission.</p>

      <div className="banner_container page_banner_container">
        <h1 className="tagline">About us</h1>
        <img
          src="https://i.pinimg.com/236x/41/93/89/419389a72c791a0ec9b3270a23dc3c69.jpg"
          alt="Banner"
          className="banner page_banner"
        />
      </div>

      <div className="inspirational_text py-10 text-center">
        <p style={{ fontSize: '18px' }}>
          It is every child’s right to receive the love, care, and attention of their family, community, or even a stranger.
        </p>
      </div>

      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
          OUR MISSION
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-5">
            <img src="https://i.pinimg.com/236x/6e/03/41/6e03412340ef8f4e1e190e6eada11cc6.jpg" alt="Our Mission" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 p-5">
            <p style={{ fontSize: '24px' }}>
              <strong>Vision:</strong> A world where every orphaned child experiences a loving, safe, and nurturing environment, and is provided the opportunities and support necessary to thrive.<br/><br/>

              <strong>Mission:</strong> Hearts to Homes is committed to transforming the lives of orphaned children across the globe by catalyzing a worldwide movement of compassionate support and action. By seamlessly connecting donors, volunteers, and child care institutions, we aim to facilitate meaningful contributions that make a profound impact on the lives of these vulnerable children.<br/><br/>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
          WHAT WE DO
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-5">
            <p style={{ fontSize: '24px' }}>
              Hearts to Homes plays a pivotal role in supporting orphanages worldwide, striving to provide orphaned children with a life full of hope, dignity, and opportunity. We act as a conduit, bringing together donors, volunteers, and orphanages, facilitating a transformative impact on the lives of the children.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <img src="https://i.pinimg.com/236x/eb/89/5a/eb895af209ae428d348fd8d225e1fab5.jpg" alt="What We Do" className="mx-auto" />
          </div>
        </div>
      </div>

      <div className="image_grid">
        {/* Your existing image grid code here */}
      </div>

      <div className="links">
        <a href="link_to_mpesa">M-Pesa</a>
        <a href="link_to_worldvision">World Vision</a>
      </div>
    </div>
  );
}

export default OurMission;
