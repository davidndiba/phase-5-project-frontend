import Banner from "../ui/Banner";
import ServicesSection from "../ui/ServicesSection";
import AppointmentSection from "../ui/AppointmentSection";
import Gallery from "../ui/Gallery"
import Map from "../ui/Map";
function Home() {
  return (
    <>
      <Banner />
      <ServicesSection/>
      <Gallery/>
      <AppointmentSection/>
      <Map/>
    </>
  );
}

export default Home;
