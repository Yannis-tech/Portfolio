import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";



const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container-lg">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link d-none d-lg-block" aria-current="page" to="home">Home</Link>
                            <Link smooth={true} className="nav-link d-lg-none" aria-current="page" to="home" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link d-none d-lg-block" aria-current="page" to="about-me">About</Link>
                            <Link smooth={true} offset={-70} className="nav-link d-lg-none" to="about-me" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link d-none d-lg-block" aria-current="page" to="experience">Experience</Link>
                            <Link smooth={true} offset={-70} className="nav-link d-lg-none" to="experience" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link d-none d-lg-block" aria-current="page" to="portfolio">Portfolio</Link>
                            <Link smooth={true} offset={-70} className="nav-link d-lg-none" to="portfolio" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link d-none d-lg-block" aria-current="page" to="contact">Contact</Link>   
                            <Link smooth={true} offset={-50} className="nav-link d-lg-none" to="contact" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;