import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube, FaCcPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";
// import {Mpesa} from '../assets/image/mpesa.ico';

function Footer() {
  return (

    <footer className="footer bg-dark contain" >
      <div className="container text-start">
        <div className="row">
          <div className="col-lg-3 col-md-6 ">
            <h5>Need Help?</h5>
            <ul className="list-unstyled help-icons">
              <li className="help-icons">
                <a id="help-icons" href='/help-centre'>Help Center</a>
              </li>
              <li className="help-icons">
                <a id="help-icons" href='/contact-us'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>About</h5>
            <ul className="list-unstyled help-icons">
              <li className="help-icons">
                <a id="help-icons" href='/about-us'>About us</a>
              </li>
              <li className="help-icons">
                <a id="help-icons" href='#'>Terms & conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h5>Payment methods</h5>
            {/* here insert mpesa logo and paypal logo */}
            <a className="pay-icons" href="#">
              <FaCcPaypal className="larger-icon" />
            </a>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="social-icons list-unstyled text-start">
                <a className="icons" href="#">
                  <FaInstagram className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaWhatsapp className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaLinkedin className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaYoutube className="larger-icon" />
                </a>
                <Link to="/sell-on-electropulse" className="btn btn-warning button-sell">
                  Sell on Electro<span>Pulse</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container line-space">

      </div>

    </footer>
  );
}

export default Footer;
// import { Link } from "react-router-dom";
// import Logo from "./Logo";

// function Footer() {
//   return (
//     <footer className="footer">
//       <Logo />
//       <div className="socials">
//         <a href="https://www.instagram.com/">
//           <i class="fa-brands fa-instagram"></i>
//         </a>
//         <a href="https://www.facebook.com">
//           <i class="fa-brands fa-facebook-f"></i>
//         </a>
//         <a href="https://www.twitter.com">
//           <i class="fa-brands fa-twitter"></i>
//         </a>
//         <a href="https://www.youtube.com">
//           <i class="fa-brands fa-youtube"></i>
//         </a>
//       </div>
//       <div className="about">
//       Striving to provide helpless children with basic necessities through programs.
//       </div>

//       <div className="footer-links">
//         <Link to="/home">Home</Link>
//         <Link to="/hair_studion">Programs</Link>
//         <Link to="/nail_bar">Projects</Link>
//         <Link to="/make_up">Children's Homes</Link>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
