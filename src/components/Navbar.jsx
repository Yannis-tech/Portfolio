import React, { useState, useEffect } from "react";
import Logo from "../assets/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import debounce from "lodash.debounce";

const Navbar = () => {

    const delay = 50;

    //Default theme on unscrolled page
    const [navbar, setNavbar] = useState(false);
    const [menu, setMenu] = useState("#01627F");

    //Set color theme depending on scroll
    const changeNavbar = () => {
        window.scrollY > 10
            ? setNavbar(true)
            : setNavbar(false)
    }

    //Set color theme depending on scroll
    const changeMenu = () => {
        window.scrollY > 10
            ? setMenu("#f4f4f4")
            : setMenu("#01627F")
    }

    useEffect(() => {
        window.addEventListener("scroll", debounce(changeNavbar, delay))
        window.addEventListener("scroll", debounce(changeMenu, delay))
    })

    return (
        <nav className={navbar ? "navbar active navbar-expand-lg fixed-top" : "navbar navbar-expand-lg fixed-top"}>
            <div className="container-lg">
                {/*<a className="navbar-brand" href="#home"><Logo className="logo" /></a>*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: menu }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={navbar ? "navbar-nav active ms-auto mb-2 mb-lg-0" : "navbar-nav ms-auto mb-2 mb-lg-0"}>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link d-none d-lg-block" aria-current="page" to="home">Home</Link>
                            <Link smooth={true} className="nav-link d-lg-none" aria-current="page" to="home" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link d-none d-lg-block" aria-current="page" to="about-me">About</Link>
                            <Link smooth={true} offset={-70} className="nav-link d-lg-none" to="about-me" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} className="nav-link d-none d-lg-block" aria-current="page" to="skills">Skills</Link>
                            <Link smooth={true} offset={-70} className="nav-link d-lg-none" to="skills" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Skills</Link>
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