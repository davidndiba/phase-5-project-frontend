import React from "react";
import Map from "./Map";
import { Link } from "react-router-dom";

function FinancialInformation() {
    const textStyle = {
        fontSize: '15px',
      }
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
          src="https://fundmytravel.com/uploads/campaign_photos/241/d-6859-727x483-1368918743.jpg"
          alt="Our Programs"
          style={{ width: "100%" }}
        />
        <div className="IntroText">
          <p className="IntroTitle">Fundraising</p>
          <h1>What if we tell you that you can turn your passion and compassion into a bigger platform?</h1>
        </div>
      </div>

      <div className="QuoteText">
        <p>
          <strong>“Small efforts *lots of people = big change”</strong>
          <br /> Hearts to homes strives to provide helpless children with basic necessities, education, and reliable health services. But without your support and donations, we won't be able to do what we do today! Yes, with the fundraising option, you can convince more people to participate in the cause of meeting the needs of the orphans!
        </p>
      </div>

      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'green' }}>
          Interested in Fundraising?
        </h2>

        {/* First Section */}
        <div className="container">
          <h2>How You Can Get Involved</h2>
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
                <h3>Follow these guidelines
                    If you plan to raise money in support of Homes to hearts, we want to make sure you do so in a legal and secure way. Please read the following rules before you begin: Homes to hearts charity number is 81-4314076. Please display this number on any fundraising material you use and hand out to participants and the general audience. Any fundraising material you may use MUST NOT suggest that you represent Orphan Life Foundation. It should CLEARLY STATE that you are only organizing a fundraiser in support of Homes to hearts. We advise you not to collect money in a public place or by going door-to-door.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="container-1">
          <h2>Fundraising Ideas</h2>
          <div className="row">
            <div className="col-md-6">
              {/* Text Section - Left */}
              <div className="text-container p-4 rounded" style={textStyle}>
                {/* You can add text or content for this section */}
                <ol>
    <li>Host a Dinner</li>
    <p>
      What could possibly be a better fundraising idea than to gather all your friends and family for a heart-warming dinner?
      You can ask the guests for admission fees or to make things interesting, ask everyone to bring in their own dishes and auction them!
      We’re sure your loved ones will be happy to donate money for some quality time together!
    </p>
    <li>Donate Presents</li>
    <p>
      Parents often like donating the extra toys, clothes, and books of their children to the less privileged. Do you do the same?
      If yes, consider asking your family and friends to donate instead of sending presents this holiday season!
      This is an amazingly simple fundraising idea that will fill your hearts with gratitude and contentment.
    </p>
    <li>Garage Sale</li>
    <p>
      What about finding things that are extra in your home and putting them up for a garage sale?
      You can donate a portion of or better yet, all of your garage sale profits to the orphans!
      On the side, it will help you clean up your home and make space for new things – a win-win for everyone!
    </p>
  </ol>
              </div>
            </div>
            <div className="col-md-6">
              {/* Image Section - Right */}
              <div className="image-container p-4 rounded">
                <img src="https://i.pinimg.com/564x/ca/91/e6/ca91e669ae1bba91486f37d1f1e5073c.jpg" alt="Your Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections can be added here if needed */}
        <div className="text-section">
      <div className="container text-center">
        <div className="text-container p-4 rounded" style={textStyle}>
          <p>
          Educational Resources And Information About Orphanages
In order to see a world where every child is able to grow up in a safe, caring, nurturing and loving family, we first need to see a shift in support away from orphanages towards work which strengthens families. Educators play a hugely important role in achieving this.

For the most part, the countries who volunteer or donate to orphanages abroad the most are the countries that no longer have orphanages themselves. The general public in places such as the UK, USA and Australia have limited knowledge about what growing up in an orphanage is actually like, but on the whole believe that supporting one is a good thing to do.

We’ve pulled together some of the key facts and statistics on orphanages to help start a larger conversation:

Globally, over 80% of children in orphanages have a living parent.
Up to 8 million children are thought to be living in orphanages.
Children who grow up in orphanages are at much higher risk of becoming victims of violence, trafficking and exploitation. 
Care leavers face a higher risk of homelessness, mental health challenges and suicide. 
In many countries, income from donations and volunteering is driving the rise in orphanages.
Orphanages can be up to 10 times more expensive than caring for a child in a family.
There is a global effort to end the use of orphanages. Every country in the world has committed to family-based care.
The majority of orphanages (75%) rely on government grants.
Only 23% of orphanages worldwide receive international support. 

Over half of the world's population live in orphanages.
There are currently 23 million orphaned children around the globe.
Educating people about the importance of supporting orphanages can make a real difference. By learning more about these incredible institutions,
If you would like to learn more about how you can support these incredible organizations, we encourage you to explore our resources section below.
Almost one out of every four children born into poverty end up in care.
Children who grow up without parents often suffer as a result – they may experience physical abuse, neglect, poor nutrition, and lack of education.</p>

          <div className="button-container">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Other sections and content */}
      <div className="Text3">
        <h1>How Can You Help</h1>
      <div className="row">
        <div className="col-md-3">
          {/* Link 1 (PayPal Giving Fund) */}
          <div style={imageContainerStyle}>
            <a href="link-to-paypal-giving-fund">
              <img
                src="https://p1.hiclipart.com/preview/621/992/915/paypal-logo-paypal-giving-fund-organization-credit-card-donation-text-signage-png-clipart.jpg"
                alt="PayPal Giving Fund"
                style={imageStyle}
              />
            </a>
            <p>PayPal Giving Fund</p>
          </div>
        </div>
        <div className="col-md-3">
          {/* Link 2 (M-Pesa Foundation) */}
          <div style={imageContainerStyle}>
            <a href="link-to-mpesa-foundation">
              <img
                src="https://e7.pngegg.com/pngimages/825/202/png-clipart-kenya-safaricom-m-pesa-payment-business-business-text-people-thumbnail.png"
                alt="M-Pesa Foundation"
                style={imageStyle}
              />
            </a>
            <p>M-Pesa Foundation</p>
          </div>
        </div>
        <div className="col-md-3">
          {/* Link 3 (World Vision) */}
          <div style={imageContainerStyle}>
            <a href="link-to-world-vision">
              <img
                src="data:image/png;base64,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"
                alt="World Vision"
                style={imageStyle}
              />
            </a>
            <p>World Vision</p>
          </div>
        </div>
        <div className="col-md-3">
          {/* Link 4 (Ukrainian Charity Fund) */}
          <div style={imageContainerStyle}>
            <a href="link-to-ukrainian-charity-fund">
              <img
                src="https://betterplace-assets.betterplace.org/uploads/organisation/profile_picture/000/019/291/crop_original_1-.jpg.png"
                alt="Ukrainian Charity Fund"
                style={imageStyle}
              />
            </a>
            <p>Ukrainian Charity Fund</p>
          </div>
        </div>
      </div>

      {/* "Donate" button section */}
      <div className="text-center" style={{ backgroundColor: 'blue' }}>
        <a href="link-to-donate">
          <button style={buttonTextStyle}>Donate Now</button>
        </a>
      </div>

      {/* Place the Map component here */}
      <Map />
    </div>
    </div>
  );
}

export default FinancialInformation;

// import React from "react";
// import { Link } from "react-router-dom";

// function FinancialInformation() {
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

// export default FinancialInformation;
