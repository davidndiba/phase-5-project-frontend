import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="socials">
        <a href="https://www.instagram.com/">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="about">
      Striving to provide helpless children with basic necessities through programs.
      </div>

      <div className="footer-links">
        <Link to="/home">Home</Link>
        <Link to="/hair_studion">Programs</Link>
        <Link to="/nail_bar">Projects</Link>
        <Link to="/make_up">Children's Homes</Link>
      </div>
    </footer>
  );
}

export default Footer;
