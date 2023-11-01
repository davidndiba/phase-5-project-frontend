import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">
        <span className="tag">HEARTS</span> TO HOMES
      </h1>
    </Link>
  );
}

export default Logo;
