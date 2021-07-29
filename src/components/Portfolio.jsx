// PICTURES
import coding from "../images/coding.jpg"
import hackathon from "../images/hackathon.jpg"
import itServer from "../images/it-server.jpg"
import map from "../images/map.png"
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
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box">
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
                        <img className="portfolio-image" src={hackathon} alt="Hackathon Project..." />
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
                                    <div className="header"> Hackathon Project </div>
                                    <div className="content">
                                        <img className="portfolio-image-popupbox" src={hackathon} alt="Hackathon Project" />
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
                                    <div className="header"> Server Project </div>
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
                                    <div className="header"> GIS Project </div>
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