import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link" aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} className="nav-link" to="about-me">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} className="nav-link" to="experience">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-70} className="nav-link" to="portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link" to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;