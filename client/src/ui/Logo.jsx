import { Link } from "react-router-dom";
import logoImage from "../assets/gallery";

function Logo(){
    return (
        <Link to="/">
            <img src={logoImage} alt="logo" className="llogo" />
        </Link>
    );
}

export default Logo;