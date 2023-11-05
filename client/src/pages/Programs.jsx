import React from "react";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <div>
      <div className="banner_container page_banner_container">
        <div className="site_tagline">
          <h1 className="tagline">Our Programs</h1>
          <p>
            Little by little, family by family, we can do so much good on so many levels.
          </p>
        </div>
        <img
          src="https://www.wfpusa.org/wp-content/uploads/2017/01/CAR_20140330_WFP-Rein_Skullerud_D4A8291-1024x681.jpg"
          alt="Banner"
          className="banner page_banner"
        />
      </div>

      <div className="inspirational_text">
        <p>Our programs are geared towards creating a better life for the less privileged children.</p>
      </div>

      <div className="image_grid">
        <div className="image_row">
          <div className="image_with_text">
            <h1 className="image_heading">Fundraising</h1>
            <Link to="/programs/fundraising">
              <img
                src="https://i.pinimg.com/236x/6e/03/41/6e03412340ef8f4e1e190e6eada11cc6.jpg"
                alt="Image 1"
                className="image"
              />
            </Link>
          </div>
          <div className="image_with_text">
            <h1 className="image_heading">Volunteer</h1>
            <Link to="/programs/volunteer">
              <img
                src="https://i.pinimg.com/236x/eb/89/5a/eb895af209ae428d348fd8d225e1fab5.jpg"
                alt="Image 2"
                className="image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
