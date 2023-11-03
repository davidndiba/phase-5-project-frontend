import Banner from "../ui/Banner";
import TextSection from "../ui/TextSection";
import ServicesSection from "../ui/ServicesSection";
import AppointmentSection from "../ui/AppointmentSection";
import Gallery from "../ui/Gallery"
import Map from "../ui/Map";
function Home() {
  return (
    <>
      <Banner />
      <TextSection />
      <ServicesSection/>
      <Gallery/>
      <AppointmentSection/>
      <Map/>
    </>
  );
}

export default Home;
