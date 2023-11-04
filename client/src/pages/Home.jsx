import React from 'react';
import TextSection from "../ui/TextSection";
import TextImageServicesSection from '../ui/TextImageService';
import ServicesSection from "../ui/ServicesSection";
import SupportSection from '../ui/SupportSection';
import AppointmentSection from "../ui/AppointmentSection";
import Gallery from "../ui/Gallery"
import Map from "../ui/Map";
import { FaWallet, FaQuestionCircle } from 'react-icons/fa';




const Home = () => {

    return (

        <>
        <section className="home-page">

<div id="carouselExampleSlidesOnly" className="carousel slide text-center" data-bs-ride="carousel" data-interval="100">
    <div className="carousel-inner justify-content-center">
        <div className="carousel-item active" style={{height: "100vh", position: "relative"}} >
            <img src="https://i.pinimg.com/564x/de/6a/40/de6a400eb5cb3cb98679093535abe3a4.jpg" className="w-100 h-100" alt="first slide" />
            <div className='carousel-caption text-centre'>
              <h1> WELCOME TO OUR HOME</h1>
              </div>
        </div>
        <div className='container' style={{height:"10vh", position:"relative"}}>
                  <h1></h1>
                    <marquee behavior="" direction="">
                        <img src="https://i.pinimg.com/564x/de/6a/40/de6a400eb5cb3cb98679093535abe3a4.jpg" alt="w-100 h-100" />
                        {/* <span><h1>eddgdhfdjgg</h1></span> */}
                    </marquee>
                </div>
    </div>
</div>

</section>
         <TextSection />
         <TextImageServicesSection />
       <ServicesSection/>
       <Gallery/>
       <AppointmentSection/>
       <SupportSection/>
       <Map/>
        </>
    )
}
export default Home;
