import React from "react";
import image from "../assets/Gallery/banner.jpg";

function Banner() {
  return (
    <div className="banner_container">
      <div className="site_tagline">
        <h1 className="tagline">
          We <span className="tag">Transform</span> Lives
        </h1>
      </div>
      <img src={image} alt="Banner" className="banner" />
    </div>
  );
}

export default Banner;
