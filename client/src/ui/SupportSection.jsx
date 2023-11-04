import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faMedkit, faTshirt } from '@fortawesome/free-solid-svg-icons';

function SupportSection() {
  const supportTextStyle = {
    textAlign: 'center',
    fontWeight: 'bolder',
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

  const buttonTextStyle = {
    color: 'black',
    fontWeight: 'bold',
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
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Support Text */}
          <div style={supportTextStyle}>
            Support
          </div>

          {/* Our Theme Text */}
          <div style={ourThemeStyle}>
            Our Theme
          </div>

          {/* Quote Text */}
          <div style={quoteStyle}>
            "Happiness is not so much in having as sharing. We make a living by what we get, but we make a life by what we give." - Norman MacEwen
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          {/* Food Icon */}
          <div className="text-center">
            <FontAwesomeIcon icon={faUtensils} size="3x" />
            <p>Food</p>
          </div>
        </div>
        <div className="col-md-4">
          {/* Medical Care Icon */}
          <div className="text-center">
            <FontAwesomeIcon icon={faMedkit} size="3x" />
            <p>Medical Care</p>
          </div>
        </div>
        <div className="col-md-4">
          {/* Clothing Icon */}
          <div className="text-center">
            <FontAwesomeIcon icon={faTshirt} size="3x" />
            <p>Clothing</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Button Container */}
          <div className="text-center" style={{ backgroundColor: 'blue' }}>
            <button style={buttonTextStyle}>Ways to Support</button>
          </div>

          {/* Heading */}
          <div style={ourThemeStyle}>
            HOW YOU CAN GET INVOLVED
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          {/* Link 1 (PayPal Giving Fund) */}
          <div style={imageContainerStyle}>
            <a href="link-to-paypal-giving-fund">
              <img src="https://p1.hiclipart.com/preview/621/992/915/paypal-logo-paypal-giving-fund-organization-credit-card-donation-text-signage-png-clipart.jpg" alt="PayPal Giving Fund" style={imageStyle} />
            </a>
            <p>PayPal Giving Fund</p>
          </div>
        </div>
        <div className="col-md-3">
          {/* Link 2 (M-Pesa Foundation) */}
          <div style={imageContainerStyle}>
            <a href="link-to-mpesa-foundation">
              <img src="https://e7.pngegg.com/pngimages/825/202/png-clipart-kenya-safaricom-m-pesa-payment-business-business-text-people-thumbnail.png" alt="M-Pesa Foundation" style={imageStyle} />
            </a>
            <p>M-Pesa Foundation</p>
          </div>
        </div>
        <div className="col-md-3">
            {/* Link 3 (World Vision) */}
          <div style={imageContainerStyle}>
            <a href="link-to-world-vision">
              <img src="data:image/png;base64,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" alt="World Vision" style={imageStyle} />
            </a>
            <p>World Vision</p>
          </div>
        </div>
        <div className="col-md-3">
          {/* Link 4 (World Vision) */}
          <div style={imageContainerStyle}>
            <a href="link-to-ukrainian-charity-fund">
              <img src="https://betterplace-assets.betterplace.org/uploads/organisation/profile_picture/000/019/291/crop_original_1-.jpg.png" alt="Ukrainian Charity Fund" style={imageStyle} />
            </a>
            <p>Ukrainian Charity Fund</p>
            
          </div>
          {/*Button Container*/}
          <div className="text-center" style={{ backgroundColor: 'blue' }}>
            <button style={buttonTextStyle}>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportSection;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils, faMedkit, faTshirt } from '@fortawesome/free-solid-svg-icons';

// function SupportSection() {
//   const supportTextStyle = {
//     textAlign: 'center',
//     fontWeight: 'bolder',
//     color: 'black',
//     textTransform: 'uppercase',
//   };

//   const ourThemeStyle = {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'blue',
//     textDecoration: 'underline',
//   };

//   const quoteStyle = {
//     textAlign: 'center',
//     margin: '20px 0',
//   };

//   const buttonStyle = {
//     textAlign: 'center',
//     backgroundColor: 'blue',
//   };

//   const buttonTextStyle = {
//     color: 'black',
//     fontWeight: 'bold',
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           {/* Support Text */}
//           <div style={supportTextStyle}>
//             Support
//           </div>

//           {/* Our Theme Text */}
//           <div style={ourThemeStyle}>
//             Our Theme
//           </div>

//           {/* Quote Text */}
//           <div style={quoteStyle}>
//             "Happiness is not so much in having as sharing. We make a living by what we get, but we make a life by what we give." - Norman MacEwen
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-4">
//           {/* Food Icon */}
//           <div className="text-center">
//             <FontAwesomeIcon icon={faUtensils} size="3x"/>
//             <p>Food</p>
//           </div>
//         </div>
//         <div className="col-md-4">
//           {/* Medical Care Icon */}
//           <div className="text-center">
//             <FontAwesomeIcon icon={faMedkit} size="3x"/>
//             <p>Medical Care</p>
//           </div>
//         </div>
//         <div className="col-md-4">
//           {/* Clothing Icon */}
//           <div className="text-center">
//             <FontAwesomeIcon icon={faTshirt} size="3x"/>
//             <p>Clothing</p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-12">
//           {/* Button */}
//           {/* Button Container */}
// <div className="text-center" style={{ backgroundColor: 'blue' }}>
//   <button style={buttonTextStyle}>Ways to Support</button>
// </div>

//           {/* Heading */}
//           <div style={ourThemeStyle}>
//             HOW YOU CAN GET INVOLVED
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-3">
//           {/* Link 1 */}
//           <div className="text-center">
//             <a href="link-to-paypal-giving-fund">
//               <img src="https://p1.hiclipart.com/preview/621/992/915/paypal-logo-paypal-giving-fund-organization-credit-card-donation-text-signage-png-clipart.jpg" alt="PayPal Giving Fund" />
//             </a>
//             <p>PayPal Giving Fund</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           {/* Link 2 */}
//           <div className="text-center">
//             <a href="link-to-mpesa-foundation">
//               <img src="https://e7.pngegg.com/pngimages/825/202/png-clipart-kenya-safaricom-m-pesa-payment-business-business-text-people-thumbnail.png" alt="M-Pesa Foundation" />
//             </a>
//             <p>M-Pesa Foundation</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           {/* Link 3 */}
//           <div className="text-center">
//             <a href="link-to-world-vision">
//               <img src="data:image/png;base64,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" alt="World Vision" />
//             </a>
//             <p>World Vision</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           {/* Link 4 */}
//           <div className="text-center">
//             <a href="link-to-ukrainian-charity-fund">
//               <img src="https://betterplace-assets.betterplace.org/uploads/organisation/profile_picture/000/019/291/crop_original_1-.jpg.png" alt="Ukrainian Charity Fund" />
//             </a>
//             <p>Ukrainian Charity Fund</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SupportSection;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils, faMedkit, faTshirt } from '@fortawesome/free-solid-svg-icons';


// function SupportSection() {
//   const supportTextStyle = {
//     textAlign: 'center',
//     fontWeight: 'bolder',
//     color: 'black',
//     textTransform: 'uppercase',
//   };

//   const ourThemeStyle = {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'blue',
//     textDecoration: 'underline',
//   };

//   const quoteStyle = {
//     textAlign: 'center',
//     margin: '20px 0',
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           {/* Support Text */}
//           <div style={supportTextStyle}>
//             Support
//           </div>

//           {/* Our Theme Text */}
//           <div style={ourThemeStyle}>
//             Our Theme
//           </div>

//           {/* Quote Text */}
//           <div style={quoteStyle}>
//             "Happiness is not so much in having as sharing. We make a living by what we get, but we make a life by what we give." - Norman MacEwen
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-4">
//           {/* Food Icon */}
//           <div className="text-center">
//             <FontAwesomeIcon icon={faUtensils} size="3x"/>
//             <p>Food</p>
//           </div>
//         </div>
//         <div className="col-md-4">
//           {/* Medical Care Icon */}
//           <div className="text-center">
//           <FontAwesomeIcon icon={faMedkit} size="3x"/>
//             <p>Medical Care</p>
//           </div>
//         </div>
//         <div className="col-md-4">
//           {/* Clothing Icon */}
//           <div className="text-center">
//           <FontAwesomeIcon icon={faTshirt} size="3x"/>
//             <p>Clothing</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SupportSection;