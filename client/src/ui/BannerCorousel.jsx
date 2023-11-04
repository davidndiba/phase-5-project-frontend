import React from 'react';

const BannerCarousel = () => {
  return (
    <div className="container">
      <h2>Carousel Example</h2>  
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img src="la.jpg" alt="Los Angeles" />
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>LA is always so much fun!</p>
            </div>
          </div>

          <div className="item">
            <img src="chicago.jpg" alt="Chicago" />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>

          <div className="item">
            <img src="ny.jpg" alt="New York" />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>

        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default BannerCarousel;


{/* // import React from "react";
// import image from "../assets/Gallery/banner.jpg";

// function Banner() {
//   return (
//     <div className="banner_container">
//       <div className="site_tagline">
//         <h1 className="tagline">
//           We <span className="tag">Transform</span> Lives
//         </h1>
//       </div>
//       <img src={image} alt="Banner" className="banner" />
//     </div>
//   );
// }

// export default Banner; */}
