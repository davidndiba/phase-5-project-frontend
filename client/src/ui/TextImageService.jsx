import React from 'react';

function TextImageServicesSection() {
  return (
    <div className="container">
      <h2>Text and Image Section</h2>
      <div className="row">
        <div className="col-md-6">
          {/* Text Section */}
          <div className="text-container p-4 rounded">
            <h3>Children Are Our Gem</h3>
            <p>Their Future Is Our Passion</p>
            <button className="btn btn-primary">Our Mission</button>
          </div>
        </div>
        <div className="col-md-6">
          {/* Image Section */}
          <div className="image-container p-4 rounded">
            <img src="https://i.pinimg.com/564x/5f/5f/0a/5f5f0a9745c5c51be70b0a630afa79a5.jpg" alt="Your Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextImageServicesSection;


// import React from 'react';

// function TextImageServicesSection() {
//   return (
//     <div className="container">
//       <h2>Text, Image, and Services Section</h2>
//       <div className="row">
//         <div className="col-md-6">
//           {/* Text Section */}
//           <div className="text-container p-4 rounded">
//             <p>
//               {/* Your text content here */}
//             </p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           {/* Image Section */}
//           <div className="image-container p-4 rounded">
//             <img src="https://i.pinimg.com/564x/5f/5f/0a/5f5f0a9745c5c51be70b0a630afa79a5.jpg" alt="Your Image" />
//           </div>
//         </div>
//         <div className="col-md-3">
//           {/* Services Section */}
//           <div className="services-container p-4 rounded">
//             {/* Your services content here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TextImageServicesSection;
