// PICTURES
import coding from "../assets/coding.jpg"
import portfolio from "../assets/portfolio.png"
import itServer from "../assets/it-server.jpg"
import map from "../assets/map.jpg"
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUP
import Popup from 'reactjs-popup';

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper" id="portfolio">
            <div className="container">
                <h1 className="text-uppercase text-center mb-5">Portfolio</h1>
                <h2 className="text-center mb-5">Projects are still underway</h2>
                <div className="image-box-wrapper">
                    <div className="portfolio-image-box">
                            <p>Issue Tracker</p>
                            <img className="portfolio-image" src={coding} alt="Coding Project..." />
                            <div className="overflow"></div>
                        <Popup
                            trigger={<button className="portfolio-icon"> <FontAwesomeIcon icon={faSearchPlus} /></button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal-popup">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header"> Coding Project </div>
                                    <div className="content">
                                        <img className="portfolio-image-popupbox" src={coding} alt="Coding Project" />
                                        <p></p>
                                        <p>Ticket system based on native Javascript and Firebase</p>
                                        <b>Github: </b><a className="hyper-link" href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="btn-popup btn-popup-view"
                                            onClick={() => {
                                                window.open("https://github.com");
                                            }}>
                                            View project
                                        </button>
                                        <button
                                            className="btn-popup btn-popup-close"
                                            onClick={() => {
                                                close();
                                            }}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                    {/* Next Project */}
                    <div className="portfolio-image-box">
                        <p>Personal Portfolio</p>
                        <img className="portfolio-image" src={portfolio} alt="Portfolio Project..." />
                        <div className="overflow"></div>
                        <Popup
                            trigger={<button className="portfolio-icon"> <FontAwesomeIcon icon={faSearchPlus} /></button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal-popup">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header">Personal Portfolio</div>
                                    <div className="content">
                                        <img className="portfolio-image-popupbox" src={portfolio} alt="Hackathon Project" />
                                        <p>This is my personal portfolio page build with react.</p>
                                        <b>Github: </b><a className="hyper-link" href="https://github.com/Yannis-tech/Portfolio" target="_blank" rel="noopener noreferrer">https://github.com/Yannis-tech/Portfolio</a>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="btn-popup btn-popup-view"
                                            onClick={() => {
                                                window.open("https://atyannis.netlify.app/");
                                            }}>
                                            View project
                                        </button>
                                        <button
                                            className="btn-popup btn-popup-close"
                                            onClick={() => {
                                                close();
                                            }}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                    {/* Next Project */}
                    <div className="portfolio-image-box">
                        <p>Placeholder 3</p>
                        <img className="portfolio-image" src={itServer} alt="IT-Server Project..." />
                        <div className="overflow"></div>
                        <Popup
                            trigger={<button className="portfolio-icon"> <FontAwesomeIcon icon={faSearchPlus} /></button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal-popup">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header">Placeholder 3</div>
                                    <div className="content">
                                        <img className="portfolio-image-popupbox" src={itServer} alt="IT-Server Project" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam.</p>
                                        <b>Github: </b><a className="hyper-link" href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="btn-popup btn-popup-view"
                                            onClick={() => {
                                                window.open("https://github.com");
                                            }}>
                                            View project
                                        </button>
                                        <button
                                            className="btn-popup btn-popup-close"
                                            onClick={() => {
                                                close();
                                            }}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                    {/* Next Project */}
                    <div className="portfolio-image-box">
                        <p>Placeholder 4</p>
                        <img className="portfolio-image" src={map} alt="GIS Project..." />
                        <div className="overflow"></div>
                        <Popup
                            trigger={<button className="portfolio-icon"> <FontAwesomeIcon icon={faSearchPlus} /></button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal-popup">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header">Placeholder 4</div>
                                    <div className="content">
                                        <img className="portfolio-image-popupbox" src={map} alt="GIS Project" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam.</p>
                                        <b>Github: </b><a className="hyper-link" href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="btn-popup btn-popup-view"
                                            onClick={() => {
                                                window.open("https://github.com");
                                            }}>
                                            View project
                                        </button>
                                        <button
                                            className="btn-popup btn-popup-close"
                                            onClick={() => {
                                                close();
                                            }}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;