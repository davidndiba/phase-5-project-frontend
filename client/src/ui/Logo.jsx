import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">
        <span className="tag">Hearts</span> To Homes
      </h1>
    </Link>
  );
}

export default Logo;
