import React from "react";
import Map from "./Map";
import { Link } from "react-router-dom";

function OurMission() {
  const textStyle = {
    fontSize: '15px',
  };
  const buttonTextStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "10px",
    cursor: "pointer",
  };

  const supportTextStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  };

  const ourThemeStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue',
    textDecoration: 'underline',
  };

  const quoteStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const buttonStyle = {
    textAlign: 'center',
    backgroundColor: 'blue',
  };

  // CSS styles for the image containers
  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  };

  // CSS styles for the image
  const imageStyle = {
    width: '100px', // Adjust the size as needed
    height: 'auto',
  };
  

  return (
    <div>
      <div className="AboutIntro">
        <img
          src="https://i.pinimg.com/564x/e8/25/5f/e8255fff594a965005d4da89f9983497.jpg"
          alt="Our Programs"
          style={{ width: "100%" }}
        />
        <div className="IntroText">
          <p className="IntroTitle">our mission</p>
          <h1>It is every child’s right to receive the love, care and attention of their family, community, or even a stranger.</h1>
        </div>
      </div>

      <div className="QuoteText">
        <p>
          <strong>“our story”</strong>
          <br /> In May 2016, one of Hearts to homes members visited a school in the village of Siaya, Kenya which we had been helping by contributing to the improvement of the orphan education environment present there. During the tour of the school, a child called him a “SAINT”. He asked as to why the little girl said that. She stated that she had been using the same pencil that had been given to her 2 years ago as part of Orphan Life Foundation’s efforts.
        </p>
      </div>

      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
          Your Gratitude.
          <br /> "Inspired by the words which came out of the mouth of the little girl as well as many other children like her, we bestow the same honor upon each and every generous person, by calling them a 'SAINT'
        </h2>

        {/* First Section */}
        <div className="container">
          <h2></h2>
          <div className="row">
            <div className="col-md-6">
              {/* Image Section - Left */}
              <div className="image-container p-4 rounded">
                <img src="https://i.pinimg.com/1200x/35/52/aa/3552aadee91269452cce540c20f297b3.jpg" alt="Your Image" width={500} />
              </div>
            </div>
            <div className="col-md-6">
              {/* Text Section - Right */}
              <div className="text-container p-4 rounded">
                <h3>A majority of all Hearts to homes members are military veterans who have traveled around the globe, have seen both good and bad things and have themselves been in situations of various natures. Many have seen the children of their brothers-in-arms become orphans as a result of their parents sacrificing their lives during combat missions. They are the ones who took this initiative: To create an organization which helps those orphans and vulnerable children continue living their normal lives. Orphan Life Foundation is all about showing and receiving gratitude, gratitude in the form of uplifting the welfare of orphan children through several achievable projects and comprehensive programs. As William Arthur Ward expressed, “Feeling gratitude and not expressing it is like wrapping a gift and not giving it.”
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Text Section */}
      <div className="text-center" style={{ backgroundColor: 'WHITE' }}>
  <p style={{
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
  }}>
    Hearts to Homes is about taking action by expressing and receiving gratitude to accomplish our mission
  </p>
</div>


      {/* "Donate" button section */}
      <div className="text-center" style={{ backgroundColor: 'white' }}>
        <a href="link-to-donate">
          <button style={buttonTextStyle}>Donate Now</button>
        </a>
      </div>

      {/* Place the Map component here */}
      <Map />
    </div>
  );
}

export default OurMission;

// import React from "react";
// import { Link } from "react-router-dom";

// function OurMission() {
//   return (
//     <div>
//       <h1>Our Mission</h1>
//       <p>This is where you can provide detailed information about your mission.</p>

//       <div className="banner_container page_banner_container">
//         <h1 className="tagline">About us</h1>
//         <img
//           src="https://i.pinimg.com/236x/41/93/89/419389a72c791a0ec9b3270a23dc3c69.jpg"
//           alt="Banner"
//           className="banner page_banner"
//         />
//       </div>

//       <div className="inspirational_text py-10 text-center">
//         <p style={{ fontSize: '18px' }}>
//           It is every child’s right to receive the love, care, and attention of their family, community, or even a stranger.
//         </p>
//       </div>

//       <div className="container mx-auto py-10">
//         <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
//           OUR MISSION
//         </h2>
//         <div className="flex flex-wrap justify-center items-center">
//           <div className="w-full md:w-1/2 p-5">
//             <img src="https://i.pinimg.com/236x/6e/03/41/6e03412340ef8f4e1e190e6eada11cc6.jpg" alt="Our Mission" className="mx-auto" />
//           </div>
//           <div className="w-full md:w-1/2 p-5">
//             <p style={{ fontSize: '24px' }}>
//               <strong>Vision:</strong> A world where every orphaned child experiences a loving, safe, and nurturing environment, and is provided the opportunities and support necessary to thrive.<br/><br/>

//               <strong>Mission:</strong> Hearts to Homes is committed to transforming the lives of orphaned children across the globe by catalyzing a worldwide movement of compassionate support and action. By seamlessly connecting donors, volunteers, and child care institutions, we aim to facilitate meaningful contributions that make a profound impact on the lives of these vulnerable children.<br/><br/>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto py-10 bg-gray-100">
//         <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
//           WHAT WE DO
//         </h2>
//         <div className="flex flex-wrap justify-center items-center">
//           <div className="w-full md:w-1/2 p-5">
//             <p style={{ fontSize: '24px' }}>
//               Hearts to Homes plays a pivotal role in supporting orphanages worldwide, striving to provide orphaned children with a life full of hope, dignity, and opportunity. We act as a conduit, bringing together donors, volunteers, and orphanages, facilitating a transformative impact on the lives of the children.
//             </p>
//           </div>
//           <div className="w-full md:w-1/2 p-5">
//             <img src="https://i.pinimg.com/236x/eb/89/5a/eb895af209ae428d348fd8d225e1fab5.jpg" alt="What We Do" className="mx-auto" />
//           </div>
//         </div>
//       </div>

//       <div className="image_grid">
//         {/* Your existing image grid code here */}
//       </div>

//       <div className="links">
//         <a href="link_to_mpesa">M-Pesa</a>
//         <a href="link_to_worldvision">World Vision</a>
//       </div>
//     </div>
//   );
// }

// export default OurMission;
