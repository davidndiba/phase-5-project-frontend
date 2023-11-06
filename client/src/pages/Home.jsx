import React from 'react';
import TextSection from "../ui/TextSection";
import TextImageServicesSection from '../ui/TextImageService';
import ServicesSection from "../ui/ServicesSection";
import SupportSection from '../ui/SupportSection';
import AppointmentSection from "../ui/AppointmentSection";
import Gallery from "../ui/Gallery";
import Map from "../ui/Map";
import { FaWallet, FaQuestionCircle } from 'react-icons/fa';

const Home = () => {
    const largeTextStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
    };

    const smallTextStyle = {
        fontSize: '24px',
        textAlign: 'center',
        color: '', // Change the text color to E5C1C1
    };

    return (
        <>
            <section className="home-page">
                <div className="intro-image">
                    <marquee behavior="" direction="">
                        <img src="https://zinginstruments.com/wp-content/uploads/family-on-a-beach.jpg" alt="Welcome to Our Home" />
                    </marquee>
                    <div className='image-text'>
                        <h1 style={largeTextStyle}>Join The Team</h1>
                        <h1 style={{ ...largeTextStyle, color: '#E5C1C1' }}>How Can You Help?</h1>
                        <p style={smallTextStyle}>Kindness Is Doing What You Can Where You Are With What You Have.</p>
                    </div>
                </div>
                <TextSection />
                <TextImageServicesSection />
                <ServicesSection />
                <Gallery />
                <AppointmentSection />
                <SupportSection />
                <Map />
            </section>
        </>
    )
}

export default Home;

// import React from 'react';
// import TextSection from "../ui/TextSection";
// import TextImageServicesSection from '../ui/TextImageService';
// import ServicesSection from "../ui/ServicesSection";
// import SupportSection from '../ui/SupportSection';
// import AppointmentSection from "../ui/AppointmentSection";
// import Gallery from "../ui/Gallery"
// import Map from "../ui/Map";
// import { FaWallet, FaQuestionCircle } from 'react-icons/fa';

// const Home = () => {
//     const largeTextStyle = {
//         fontSize: '36px',  // Adjust the font size as needed
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: '20px', // Spacing between the text
//     };

//     const smallTextStyle = {
//         fontSize: '24px',  // Adjust the font size as needed
//         textAlign: 'center',
//     };

//     return (
//         <>
//         <section className="home-page">
//             <div className="intro-image">
//                 <marquee behavior="" direction="">
//                     <img src="https://zinginstruments.com/wp-content/uploads/family-on-a-beach.jpg" alt="Welcome to Our Home"  />
//                 </marquee>
//                 <div className='image-text'>
//                     <h1 style={largeTextStyle}>Join The Team</h1>
//                     <h1 style={largeTextStyle}>How Can You Help?</h1>
//                     <p style={smallTextStyle}>Kindness Is Doing What You Can Where You Are With What You Have.</p>
//                 </div>
//             </div>
//             <TextSection />
//             <TextImageServicesSection />
//             <ServicesSection />
//             <Gallery />
//             <AppointmentSection />
//             <SupportSection />
//             <Map />
//         </section>
//         </>
//     )
// }

// export default Home;

// import React from 'react';
// import TextSection from "../ui/TextSection";
// import TextImageServicesSection from '../ui/TextImageService';
// import ServicesSection from "../ui/ServicesSection";
// import SupportSection from '../ui/SupportSection';
// import AppointmentSection from "../ui/AppointmentSection";
// import Gallery from "../ui/Gallery"
// import Map from "../ui/Map";
// import { FaWallet, FaQuestionCircle } from 'react-icons/fa';

// const Home = () => {
//     return (
//         <>
//         <section className="home-page">
//             <div className="intro-image">
//             <marquee behavior="" direction="">
//                 <img src="https://zinginstruments.com/wp-content/uploads/family-on-a-beach.jpg" alt="Welcome to Our Home"  />
//                 </marquee>
//                 <div className='image-text'>
//                     <h1>WELCOME TO OUR HOME</h1>
//                 </div>
//             </div>
//             <TextSection />
//             <TextImageServicesSection />
//             <ServicesSection />
//             <Gallery />
//             <AppointmentSection />
//             <SupportSection />
//             <Map />
//         </section>
//         </>
//     )
// }

// export default Home;

// import React from 'react';
// import TextSection from "../ui/TextSection";
// import TextImageServicesSection from '../ui/TextImageService';
// import ServicesSection from "../ui/ServicesSection";
// import SupportSection from '../ui/SupportSection';
// import AppointmentSection from "../ui/AppointmentSection";
// import Gallery from "../ui/Gallery"
// import Map from "../ui/Map";
// import { FaWallet, FaQuestionCircle } from 'react-icons/fa';




// const Home = () => {

//     return (

//         <>
//         <section className="home-page">

// {/* <div id="carouselExampleSlidesOnly" className="carousel slide text-center" data-bs-ride="carousel" data-interval="100">
//     <div className="carousel-inner justify-content-center">
//         <div className="carousel-item active" style={{height: "100vh", position: "relative"}} >
//             <img src="https://i.pinimg.com/564x/de/6a/40/de6a400eb5cb3cb98679093535abe3a4.jpg" className="w-100 h-100" alt="first slide" />
//             <div className='carousel-caption text-centre'>
//               <h1> WELCOME TO OUR HOME</h1>
//               </div>
//         </div> */}
//         <div className='container' style={{height:"10vh", position:"relative"}}>
//                   <h1></h1>
//                     <marquee behavior="" direction="">
//                         <img src="https://i.pinimg.com/564x/de/6a/40/de6a400eb5cb3cb98679093535abe3a4.jpg" alt="w-100 h-100" />
//                         {/* <span><h1>eddgdhfdjgg</h1></span> */}
//                     </marquee>
//                 </div>
// <br/>   
// {/* {/* <div class="row row-cols-2 row-cols-md-4 g-4">
// <div class="col">
// <div class="card h-100">
// <img src="..." class="card-img-top" alt="..."/>
// <div class="card-body */}

// </section>
//          <TextSection />
//          <TextImageServicesSection />
//        <ServicesSection/>
//        <Gallery/>
//        <AppointmentSection/>
//        <SupportSection/>
//        <Map/>
//         </>
//     )
// }
// export default Home;
