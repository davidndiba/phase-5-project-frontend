import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <div className="banner_container page_banner_container">
          <div className="site_tagline">
            <h1 className="tagline">About us</h1>
          </div>
          <img
            src="https://www.humanium.org/en/wp-content/uploads/2020/03/shutterstock_1180465816-830x553.jpg"
            alt="Banner"
            className="banner page_banner"
          />
        </div>
      </div>

      <div className="inspirational_text">
        <p>
          It is every child’s right to receive the love, care, and attention of their family, community, or even a stranger.
        </p>
      </div>

      <div className="image_grid">
        <div className="image_row">
          <div className="image_with_text">
            <h1 className="image_heading">Our Mission</h1>
            <Link to="/about/our-mission"> {/* Update the link to use the nested route */}
              <img
                src="https://i.pinimg.com/236x/6e/03/41/6e03412340ef8f4e1e190e6eada11cc6.jpg"
                alt="Image 1"
                className="image"
              />
            </Link>
          </div>
          <div className="image_with_text">
            <h1 className="image_heading">What We Do</h1>
            <Link to="/about/what-we-do">
              <img
                src="https://i.pinimg.com/236x/eb/89/5a/eb895af209ae428d348fd8d225e1fab5.jpg"
                alt="Image 2"
                className="image"
              />
            </Link>
          </div>
        </div>

        <div className="image_row">
          <div className="image_with_text">
            <h1 className="image_heading">Financial Information</h1>
            <Link to="/about/financial-information">
              <img
                src="https://i.pinimg.com/236x/65/eb/cd/65ebcd140f9715ef229b9d97a29dfc65.jpg"
                alt="Image 3"
                className="image"
              />
            </Link>
          </div>
          <div className="image_with_text">
            <h1 className="image_heading">Donate Here</h1>
            <Link to="/about/donate-here">
              <img
                src="https://i.pinimg.com/236x/de/6a/40/de6a400eb5cb3cb98679093535abe3a4.jpg"
                alt="Image 4"
                className="image"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="links">
        <a href="link_to_mpesa">M-Pesa</a>
        <a href="link_to_worldvision">World Vision</a>
      </div>
    </>
  );
}

export default About;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function About() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetch("/makeup_services")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);

//   return (
//     <>
//       <div>
//         <div className="banner_container page_banner_container">
//           <div className="site_tagline">
//             <h1 className="tagline">About us</h1>
//           </div>
//           <img
//             src="https://i.pinimg.com/236x/41/93/89/419389a72c791a0ec9b3270a23dc3c69.jpg"
//             alt="Banner"
//             className="banner page_banner"
//           />
//         </div>
//       </div>

//       <div className="inspirational_text">
//         <p>
//           It is every child’s right to receive the love, care, and attention of their family, community, or even a stranger.
//         </p>
//       </div>

//       <div className="image_grid">
//         <div className="image_row">
//         <div className="image_with_text">
//         <h1 className="image_heading">Our Mission</h1>
//         <Link to="/our-mission">
//           <img
//             src="https://i.pinimg.com/236x/6e/03/41/6e03412340ef8f4e1e190e6eada11cc6.jpg"
//             alt="Image 1"
//             className="image"
//           />
//         </Link>
//       </div>
//           <div className="image_with_text">
//             <h1 className="image_heading">What We Do</h1>
//             <Link to="/what-we-do">
//             <img
//               src="https://i.pinimg.com/236x/eb/89/5a/eb895af209ae428d348fd8d225e1fab5.jpg"
//               alt="Image 2"
//               className="image"
//             />
//             </Link>
//           </div>
//         </div>

//         <div className="image_row">
//           <div className="image_with_text">
//             <h1 className="image_heading">Financial Information</h1>
//             <Link to="/our-vision">
//             <img
//               src="https://i.pinimg.com/236x/65/eb/cd/65ebcd140f9715ef229b9d97a29dfc65.jpg"
//               alt="Image 3"
//               className="image"
//             />
//             </Link>
//             </div>
//           <div className="image_with_text">
//             <h1 className="image_heading">Donate Here</h1>
//             <Link to="/our-mission">
//             <img
//               src="https://i.pinimg.com/236x/de/6a/40/de6a400eb5cb3cb98679093535abe3a4.jpg"
//               alt="Image 4"
//               className="image"
//             />
//             </Link>
//             </div>
//         </div>
//       </div>

//       <div className="links">
//         <a href="link_to_mpesa">M-Pesa</a>
//         <a href="link_to_worldvision">World Vision</a>
//       </div>
//     </>
//   );
// }

// export default About;
