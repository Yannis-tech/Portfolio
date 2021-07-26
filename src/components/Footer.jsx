import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" href="#home">Home</a>
                                <br />
                                <a className="footer-nav" href="#about-me">About</a>
                                <br />
                            </div>
                            <div className="col">
                                <a className="footer-nav" href="#experience">Experience</a>
                                <br />
                                <a className="footer-nav" href="#portfolio">Work</a>
                                <br />
                                <a className="footer-nav" href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <p>Share my site:</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"Link to Portfolio"}
                                quote={"Frontend Developer"}
                                hashtag="javascript"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"Link to Portfolio"}
                                quote={"Frontend Developer"}
                                hashtag="javascript"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"Link to Portfolio"}
                                quote={"Frontend Developer"}
                                hashtag="javascript"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"Link to Portfolio"}
                                quote={"Frontend Developer"}
                                hashtag="javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Yannis Pigorsch | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;