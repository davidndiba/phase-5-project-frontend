import React from 'react';

function TextImageServicesSection() {
  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-6">
          {/* Text Section */}
          <div className="text-container p-4 rounded" style={textContainerStyle}>
            <h3 style={textHeaderStyle}>Children Are Our Gem</h3>
            <p style={textSubheaderStyle}>Their Future Is Our Passion</p>
            <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
              <li style={listItemStyle}>
              Hearts to Homes plays a pivotal role in supporting orphanages worldwide, striving to provide orphaned children with a life full of hope, dignity, and opportunity. We act as a conduit, bringing together donors, volunteers, and orphanages, facilitating a transformative impact on the lives of the children.
              </li>
            </ul>
            <a href="/our-mission" className="btn btn-primary">Our Mission</a>
            <p style={missionStyle}></p>
          </div>
        </div>
        <div className="col-md-6">
          {/* Image Section */}
          <div className="image-container p-4 rounded" style={imageContainerStyle}>
            <img src="https://www.un-ilibrary.org/docserver/fulltext/b65ff6c8.jpg" alt="Your Image" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  backgroundColor: 'blue',
  padding: '0',
};

const textContainerStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const textHeaderStyle = {
  fontWeight: 'bold',
  fontSize: '24px',
};

const textSubheaderStyle = {
  color: '#E5C1C1',
  fontSize: '20px',
};

const imageContainerStyle = {
  backgroundColor: 'blue',
  padding: '0',
};

const imageStyle = {
  width: '100%',
  height: '120%',
};

const missionStyle = {
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
};
const listItemStyle = {
  marginBottom: '30px',
  fontWeight: "bold",
  };
const listStyleType = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  paddingTop: '60px'
  };


export default TextImageServicesSection;

// import React from 'react';

// function TextImageServicesSection() {
//   return (
//     <div className="container">
//       <h2>Text and Image Section</h2>
//       <div className="row">
//         <div className="col-md-6">
//           {/* Text Section */}
//           <div className="text-container p-4 rounded">
//             <h3>Children Are Our Gem</h3>
//             <p>Their Future Is Our Passion</p>
//             <button className="btn btn-primary">Our Mission</button>
//           </div>
//         </div>
//         <div className="col-md-6">
//           {/* Image Section */}
//           <div className="image-container p-4 rounded">
//             <img src="https://www.un-ilibrary.org/docserver/fulltext/b65ff6c8.jpg" alt="Your Image" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TextImageServicesSection;


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
