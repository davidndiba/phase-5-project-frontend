import React from "react";
import Map from "./Map";
import { Link } from "react-router-dom";

function WhatWeDo() {
  const textStyle = {
    fontSize: '15px',
  };
  const textStyle_1 = {
    marginTop: '-20px',
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#E5C1C1'
  };
  const buttonTextStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  };

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
    backgroundColor: 'white',
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
      {/* Header Section */}
      <div className="AboutIntro">
        <img
          src="https://i.pinimg.com/564x/53/bb/f3/53bbf3c9da1ac078374354b468f63fed.jpg"
          alt="Our Programs"
          style={{ width: "100%" }}
        />
        <div className="IntroText">
          <p className="IntroTitle">What We Do</p>
          <h1>If we can conquer space, we can also conquer the orphan crisis</h1>
        </div>
      </div>

      {/* Quote Section */}
      <div className="QuoteText">
        <p>
          <strong>“Let’s lay the foundation of orphan welfare by promoting their education, health, and safety!”</strong>
          <br /> Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.
        </p>
      </div>

      {/* Container for "Interested in Fundraising?" */}
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
          Interested in Joining Us?
        </h2>

        {/* First Section */}
        <div className="container">
          <h2>Our United States Division</h2>
          <div className="row">
            <div className="col-md-6">
              {/* Image Section - Left */}
              <div className="image-container p-4 rounded">
                <img src="https://i.pinimg.com/564x/15/2b/09/152b099f4c7401b7b65b967d50a31260.jpg" alt="Your Image" width={500} />
              </div>
            </div>
            <div className="col-md-6">
              {/* Text Section - Right */}
              <div className="text-container p-4 rounded" style={textStyle}>
                <h3>The goal of the U.S. Division is to identify, monitor, and modify orphan education plans, supporting vulnerable children and families to our best capabilities. With the help of public donations and our partners' support, we provide financial assistance to the unfortunate.
                  <h3>United States Division</h3>
                  <p>
                    Our mission is to provide a safe and loving home to children who have been abandoned by their parents due to domestic violence, abuse,
                    and to provide a safe and nurturing environment where children feel loved and valued.
                    The United States division is a nonprofit organization that works to provide support and resources to children who have been separated from their parents due to different circumstances that were unavoidable to some extrent.
                    The mission of our US division is to provide support and resources to families affected by childhood trauma through a variety of programs including counsel.
                    </p>
                </h3>
                <div className="text-center" style={buttonStyle}>
                  <a href="link-to-donate">
                    <button style={buttonTextStyle}>Donate Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="container-1">
          <h2>Education Division</h2>
          <div className="row">
            <div className="col-md-6">
              {/* Text Section - Left */}
              <div className="text-container p-4 rounded" style={textStyle}>
                {/* You can add text or content for this section */}
                <p>Helping registered orphans and their support communities to improve the educational framework in their region is our top priority.
                  <p>
                    We are committed to providing quality education, training and development opportunities that empower our members to achieve their full potential.
                    and to provide a safe and nurturing environment where children feel loved and valued.

                  </p>
                </p>
                <div className="text-center" style={buttonStyle}>
                  <a href="link-to-donate">
                    <button style={buttonTextStyle}>Donate Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* Image Section - Right */}
              <div className="image-container p-4 rounded">
                <img src="https://i.pinimg.com/564x/aa/0a/10/aa0a10cd561c6f1324aa753feba16fff.jpg" alt="Your Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Text before the third section */}
        <div className="text-section">
          <div className="container text-center">
            <div className="text-container p-4 rounded" style={textStyle_1}>
              <p>
                "Providing better educational opportunities to orphans, we empower them to complete their basic as well as advanced schooling."
              </p>
              </div>
              <div className="text-container p-4 rounded" style={textStyle}>
              <p>
                We achieve this by cultivating a safe and efficient teaching environment, providing basic school supplies, reducing the level of educational disparity, and reducing or better yet eliminating the barriers orphans face for schooling.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section (Repeat of Second Section) */}
        <div className="container">
          <h2>The Health Sector</h2>
          <div className="row">
            <div className="col-md-6">
              {/* Image Section - Left */}
              <div className="image-container p-4 rounded">
                <img src="https://i.pinimg.com/564x/d0/c5/46/d0c546b2ba5dcd445663693f446f94fe.jpg" alt="Your Image" width={500} />
              </div>
            </div>
            <div className="col-md-6">
              {/* Text Section - Right */}
              <div className="text-container p-4 rounded" style={textStyle}>
                <h3>This division is focused on granting easy access to health<br></br> and nutritional services to orphans and their families.<br></br> With our specialized strategy, we work to minimize the risk of contracting the HIV/AIDS virus in orphan children. Working in close coordination with the education division, the health sector ensures maximum support for children’s careers, optimal protection of their legal and human rights, and meeting their emotional needs.</h3>
                <div className="text-center" style={buttonStyle}>
                  <a href="link-to-donate">
                    <button style={buttonTextStyle}>Donate Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Place the Map component here */}
      <Map />
    </div>
  );
}

export default WhatWeDo;

// import React from "react";
// import Map from "./Map";
// import { Link } from "react-router-dom";

// function WhatWeDo() {
//   const textStyle = {
//     fontSize: '15px',
//   };
//   const textStyle_1 = {
//     marginTop: '-20px',
//     fontSize: '25px',
//     fontWeight: 'bold',
//   };
//   const buttonTextStyle = {
//     backgroundColor: "blue",
//     color: "white",
//     padding: "10px 20px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     border: "none",
//     cursor: "pointer",
//   };

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
//     backgroundColor: 'white',
//   };

//   // CSS styles for the image containers
//   const imageContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginBottom: '20px',
//   };

//   // CSS styles for the image
//   const imageStyle = {
//     width: '100px', // Adjust the size as needed
//     height: 'auto',
//   };

//   return (
//     <div>
//       {/* Header Section */}
//       <div className="AboutIntro">
//         <img
//           src="https://i.pinimg.com/564x/53/bb/f3/53bbf3c9da1ac078374354b468f63fed.jpg"
//           alt="Our Programs"
//           style={{ width: "100%" }}
//         />
//         <div className="IntroText">
//           <p className="IntroTitle">What We Do</p>
//           <h1>If we can conquer space, we can also conquer the orphan crisis</h1>
//         </div>
//       </div>

//       {/* Quote Section */}
//       <div className="QuoteText">
//         <p>
//           <strong>“Let’s lay the foundation of orphan welfare by promoting their education, health, and safety!”</strong>
//           <br /> Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.
//         </p>
//       </div>

//       {/* Container for "Interested in Fundraising?" */}
//       <div className="container mx-auto py-10">
//         <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
//           Interested in Joining Us?
//         </h2>

//         {/* First Section */}
//         <div className="container">
//           <h2>Our United States Division</h2>
//           <div className="row">
//             <div className="col-md-6">
//               {/* Image Section - Left */}
//               <div className="image-container p-4 rounded">
//                 <img src="https://i.pinimg.com/564x/15/2b/09/152b099f4c7401b7b65b967d50a31260.jpg" alt="Your Image" width={500} />
//               </div>
//             </div>
//             <div className="col-md-6">
//               {/* Text Section - Right */}
//               <div className="text-container p-4 rounded">
//                 <h3>The goal of the U.S. Division is to identify, monitor, and modify orphan education plans, supporting vulnerable children and families to our best capabilities. With the help of public donations and our partners' support, we provide financial assistance to the unfortunate.</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second Section */}
//         <div className="container-1">
//           <h2>Education Division</h2>
//           <div className="row">
//             <div className="col-md-6">
//               {/* Text Section - Left */}
//               <div className="text-container p-4 rounded" style={textStyle}>
//                 {/* You can add text or content for this section */}
//                 <p>Helping registered orphans and their support communities to improve the educational framework in their region is our top priority.</p>
//               </div>
//             </div>
//             <div className="col-md-6">
//               {/* Image Section - Right */}
//               <div className="image-container p-4 rounded">
//                 <img src="https://i.pinimg.com/564x/aa/0a/10/aa0a10cd561c6f1324aa753feba16fff.jpg" alt="Your Image" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Text before the third section */}
//         <div className="text-section">
//           <div className="container text-center">
//             <div className="text-container p-4 rounded" style={textStyle_1}>
//               <p>
//                 "Providing better educational opportunities to orphans, we empower them to complete their basic as well as advanced schooling."
//               </p>
//               <p>
//                 We achieve this by cultivating a safe and efficient teaching environment, providing basic school supplies, reducing the level of educational disparity, and reducing or better yet eliminating the barriers orphans face for schooling.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Third Section (Repeat of Second Section) */}
//         <div className="container">
//           <h2>The Health Sector</h2>
//           <div className="row">
//             <div className="col-md-6">
//               {/* Image Section - Left */}
//               <div className="image-container p-4 rounded">
//                 <img src="https://i.pinimg.com/564x/d0/c5/46/d0c546b2ba5dcd445663693f446f94fe.jpg" alt="Your Image" width={500} />
//               </div>
//             </div>
//             <div className="col-md-6">
//               {/* Text Section - Right */}
//               <div className="text-container p-4 rounded">
//                 <h3>This division is focused on granting easy access to health<br></br> and nutritional services to orphans and their families.<br></br> With our specialized strategy, we work to minimize the risk of contracting the HIV/AIDS virus in orphan children. Working in close coordination with the education division, the health sector ensures maximum support for children’s careers, optimal protection of their legal and human rights, and meeting their emotional needs.</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* "Donate" button section */}
//       <div className="text-center" style={buttonStyle}>
//         <a href="link-to-donate">
//           <button style={buttonTextStyle}>Donate Now</button>
//         </a>
//       </div>

//       {/* Place the Map component here */}
//       <Map />
//     </div>
//   );
// }

// export default WhatWeDo;

    
//       return (
//         <div>
//           {/* Header Section */}
//           <div className="AboutIntro">
//             <img
//               src="https://i.pinimg.com/564x/53/bb/f3/53bbf3c9da1ac078374354b468f63fed.jpg"
//               alt="Our Programs"
//               style={{ width: "100%" }}
//             />
//             <div className="IntroText">
//               <p className="IntroTitle">What We Do</p>
//               <h1>If we can conquer space, we can also conquer the orphan crisis</h1>
//             </div>
//           </div>
    
//           {/* Quote Section */}
//           <div className="QuoteText">
//             <p>
//               <strong>“Let’s lay the foundation of orphan welfare by promoting their education, health, and safety!”</strong>
//               <br /> Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.
//             </p>
//           </div>
    
//           {/* Container for "Interested in Fundraising?" */}
//           <div className="container mx-auto py-10">
//             <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
//               Interested in Fundraising?
//             </h2>
    
//             {/* First Section */}
//             <div className="container">
//               <h2>Our United States Division</h2>
//               <div className="row">
//                 <div className="col-md-6">
//                   {/* Image Section - Left */}
//                   <div className="image-container p-4 rounded">
//                     <img src="https://i.pinimg.com/1200x/35/52/aa/3552aadee91269452cce540c20f297b3.jpg" alt="Your Image" width={500} />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   {/* Text Section - Right */}
//                   <div className="text-container p-4 rounded">
//                     <h3>The goal of the U.S. Division is to identify, monitor, and modify orphan education plans, supporting vulnerable children and families to our best capabilities. With the help of public donations and our partners' support, we provide financial assistance to the unfortunate.</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
    
//             {/* ... (Other Sections) ... */}
//             {/* Second Section */}
// //         <div className="container-1">
// //           <h2>Education Impact</h2>
// //           <div className="row">
// //             <div className="col-md-6">
// //               {/* Text Section - Left */}
// //               <div className="text-container p-4 rounded" style={textStyle}>
// //                 {/* You can add text or content for this section */}
// //                 <p/>Helping registered orphans and their support communities to improve the educational framework in their region is our top priority.
// //               </div>
// //             </div>
// //             <div className="col-md-6">
// //               {/* Image Section - Right */}
// //               <div className="image-container p-4 rounded">
// //                 <img src="https://i.pinimg.com/564x/ca/91/e6/ca91e669ae1bba91486f37d1f1e5073c.jpg" alt="Your Image" />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="text-section">
// //       <div className="container text-center">
// //         <div className="text-container p-4 rounded" style={textStyle}>
// //           <p>"Providing better educational opportunities to orphans, we empower them to complete their basic as well as advanced schooling."</p>
// //           <p>We achieve this by cultivating a safe and efficient teaching environment, providing basic school supplies, reducing the level of educational disparity, and reducing or better yet eliminating the barriers orphans face for schooling.</p>
// //           </div>          
    
//             {/* "Donate" button section */}
//             <div className="text-center" style={{ backgroundColor: 'blue' }}>
//               <a href="link-to-donate">
//                 <button style={buttonTextStyle}>Donate Now</button>
//               </a>
//             </div>
    
//             {/* Place the Map component here */}
//             <Map />
//           </div>
//         </div>
//       );
//     }
    
//     export default WhatWeDo;
//   return (
//     <div>
//       <div className="AboutIntro">
//         <img
//           src="https://i.pinimg.com/564x/53/bb/f3/53bbf3c9da1ac078374354b468f63fed.jpg"
//           alt="Our Programs"
//           style={{ width: "100%" }}
//         />
//         <div className="IntroText">
//           <p className="IntroTitle">What We Do</p>
//           <h1>If we can conquer space,we can also conquer orphan crisis</h1>
//         </div>
//       </div>

//       <div className="QuoteText">
//         <p>
//           <strong>“Let’s lay the foundation of orphan welfare by promoting their education, health, and safety!”</strong>
//           <br /> Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.
//         </p>
//       </div>

//       <div className="container mx-auto py-10">
//         <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
//           Interested in Fundraising?
//         </h2>

//         {/* First Section */}
//         <div className="container">
//           <h2>Our United StatesDivision</h2>
//           <div className="row">
//             <div className="col-md-6">
//               {/* Image Section - Left */}
//               <div className="image-container p-4 rounded">
//                 <img src="https://i.pinimg.com/1200x/35/52/aa/3552aadee91269452cce540c20f297b3.jpg" alt="Your Image" width={500} />
//               </div>
//             </div>
//             <div className="col-md-6">
//               {/* Text Section - Right */}
//               <div className="text-container p-4 rounded">
//                 <h3>The goal of the U.S. Division is to identify, monitor, and modify orphan education plans, supporting vulnerable children and families to our best capabilities. With the help of public donation and our partners’ support, we provide financial assistance to the unfortunate.</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second Section */}
//         <div className="container-1">
//           <h2>Education Impact</h2>
//           <div className="row">
//             <div className="col-md-6">
//               {/* Text Section - Left */}
//               <div className="text-container p-4 rounded" style={textStyle}>
//                 {/* You can add text or content for this section */}
//                 <p/>Helping registered orphans and their support communities to improve the educational framework in their region is our top priority.
//               </div>
//             </div>
//             <div className="col-md-6">
//               {/* Image Section - Right */}
//               <div className="image-container p-4 rounded">
//                 <img src="https://i.pinimg.com/564x/ca/91/e6/ca91e669ae1bba91486f37d1f1e5073c.jpg" alt="Your Image" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-section">
//       <div className="container text-center">
//         <div className="text-container p-4 rounded" style={textStyle}>
//           <p>"Providing better educational opportunities to orphans, we empower them to complete their basic as well as advanced schooling."</p>
//           <p>We achieve this by cultivating a safe and efficient teaching environment, providing basic school supplies, reducing the level of educational disparity, and reducing or better yet eliminating the barriers orphans face for schooling.</p>
//           </div>          

//         {/* Additional Sections can be added here if needed */}
//         {/* First Section */}
//         <div className="container">
//           <h2>Our United StatesDivision</h2>
//           <div className="row">
//             <div className="col-md-6">
//               {/* Image Section - Left */}
//               <div className="image-container p-4 rounded">
//                 <img src="https://i.pinimg.com/1200x/35/52/aa/3552aadee91269452cce540c20f297b3.jpg" alt="Your Image" width={500} />
//               </div>
//             </div>
//             <div className="col-md-6">
//               {/* Text Section - Right */}
//               <div className="text-container p-4 rounded">
//                 <h3>The goal of the U.S. Division is to identify, monitor, and modify orphan education plans, supporting vulnerable children and families to our best capabilities. With the help of public donation and our partners’ support, we provide financial assistance to the unfortunate.</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-section">
//       <div className="container text-center">
//         <div className="text-container p-4 rounded" style={textStyle}>
//           <p>
//           Educational Resources And Information About Orphanages
// In order to see a world where every child is able to grow up in a safe, caring, nurturing and loving family, we first need to see a shift in support away from orphanages towards work which strengthens families. Educators play a hugely important role in achieving this.

// For the most part, the countries who volunteer or donate to orphanages abroad the most are the countries that no longer have orphanages themselves. The general public in places such as the UK, USA and Australia have limited knowledge about what growing up in an orphanage is actually like, but on the whole believe that supporting one is a good thing to do.

// We’ve pulled together some of the key facts and statistics on orphanages to help start a larger conversation:

// Globally, over 80% of children in orphanages have a living parent.
// Up to 8 million children are thought to be living in orphanages.
// Children who grow up in orphanages are at much higher risk of becoming victims of violence, trafficking and exploitation. 
// Care leavers face a higher risk of homelessness, mental health challenges and suicide. 
// In many countries, income from donations and volunteering is driving the rise in orphanages.
// Orphanages can be up to 10 times more expensive than caring for a child in a family.
// There is a global effort to end the use of orphanages. Every country in the world has committed to family-based care.
// The majority of orphanages (75%) rely on government grants.
// Only 23% of orphanages worldwide receive international support. 

// Over half of the world's population live in orphanages.
// There are currently 23 million orphaned children around the globe.
// Educating people about the importance of supporting orphanages can make a real difference. By learning more about these incredible institutions,
// If you would like to learn more about how you can support these incredible organizations, we encourage you to explore our resources section below.
// Almost one out of every four children born into poverty end up in care.
// Children who grow up without parents often suffer as a result – they may experience physical abuse, neglect, poor nutrition, and lack of education.</p>

//           <div className="button-container">
//             <button className="btn btn-primary">Learn More</button>
//           </div>
//         </div>
//       </div>
//     </div>
//       </div>

//       {/* Other sections and content */}
//       <div className="Text3">
//         <h1>How Can You Help</h1>
//       <div className="row">
//         <div className="col-md-3">
//           {/* Link 1 (PayPal Giving Fund) */}
//           <div style={imageContainerStyle}>
//             <a href="link-to-paypal-giving-fund">
//               <img
//                 src="https://p1.hiclipart.com/preview/621/992/915/paypal-logo-paypal-giving-fund-organization-credit-card-donation-text-signage-png-clipart.jpg"
//                 alt="PayPal Giving Fund"
//                 style={imageStyle}
//               />
//             </a>
//             <p>PayPal Giving Fund</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           {/* Link 2 (M-Pesa Foundation) */}
//           <div style={imageContainerStyle}>
//             <a href="link-to-mpesa-foundation">
//               <img
//                 src="https://e7.pngegg.com/pngimages/825/202/png-clipart-kenya-safaricom-m-pesa-payment-business-business-text-people-thumbnail.png"
//                 alt="M-Pesa Foundation"
//                 style={imageStyle}
//               />
//             </a>
//             <p>M-Pesa Foundation</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           {/* Link 3 (World Vision) */}
//           <div style={imageContainerStyle}>
//             <a href="link-to-world-vision">
//               <img
//                 src="data:image/png;base64,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"
//                 alt="World Vision"
//                 style={imageStyle}
//               />
//             </a>
//             <p>World Vision</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           {/* Link 4 (Ukrainian Charity Fund) */}
//           <div style={imageContainerStyle}>
//             <a href="link-to-ukrainian-charity-fund">
//               <img
//                 src="https://betterplace-assets.betterplace.org/uploads/organisation/profile_picture/000/019/291/crop_original_1-.jpg.png"
//                 alt="Ukrainian Charity Fund"
//                 style={imageStyle}
//               />
//             </a>
//             <p>Ukrainian Charity Fund</p>
//           </div>
//         </div>
//       </div>

//       {/* "Donate" button section */}
//       <div className="text-center" style={{ backgroundColor: 'blue' }}>
//         <a href="link-to-donate">
//           <button style={buttonTextStyle}>Donate Now</button>
//         </a>
//       </div>

//       {/* Place the Map component here */}
//       <Map />
//     </div>
//     </div>
//   );
// }

// export default WhatWeDo;
