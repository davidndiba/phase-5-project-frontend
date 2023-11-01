import Logo from "./Logo";
import { NavLink, Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }
  return (
    <div className="header">
      <Logo />
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/programs">Programs</NavLink>
        </li>
        <li>
          <NavLink to="/children's homes">Children's Homes</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        {user?.username && <Link to="/my_appointments">My Appointments</Link>}

        {user?.username && (
          <>
            <Link to="/book_appointment">
              <li className="nav_btn login_btn">Book</li>
            </Link>
            <li className="nav_btn login_btn" onClick={handleLogout}>
              Logout
            </li>
          </>
        )}
        {user?.username && (
          <li className="name">Hello, {user?.username?.split(" ")[0]}</li>
        )}
        {!user?.username && (
          <>
            {" "}
            <li className="nav_btn login_btn">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav_btn signup_btn">
              <Link to="/signup">Sign Up</Link>
            </li>{" "}
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
