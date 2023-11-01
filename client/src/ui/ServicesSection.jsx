import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <div className="services_section">
      <div className="services_header">
        <h1 className="heading">Hearts</h1>
        <h1 className="sub-heading">To Homes</h1>
      </div>

      <div className="all_services">
        <div className="service">
          <span>💇‍♀️</span>
          <h1>Projects</h1>
          <p>
          Every year, millions of individuals help support communities in need through organizing fundraisers, setting up donation programs and holding community service events. Orphan Life Foundation has been recognizing those areas which require attention through the following programs:
          </p>
          <Link to="/hair_studio">
            <button className="service_btn">See All &rarr;</button>
          </Link>
        </div>
        <div className="service">
          <span>💄</span>
          <h1>Programs</h1>
          <p>
          Our programs are geared towards creating a better life for the less privileged children.
          </p>
          <Link to="/make_up">
            <button className="service_btn">See All &rarr;</button>
          </Link>
        </div>
        <div className="service">
          <span>💅</span>
          <h1>Children Homes</h1>
          <p>
          Let’s Spread A Smile
          Not Tears
          Come Cultivate Love
          Not Fears
          </p>
          <Link to="/nail_bar">
            <button className="service_btn">See All &rarr;</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
