import author from "../assets/me.png"

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="photo-wrap mb-5">
                            <img className="profile-img" src={author} alt="author..." />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h1 className="about-header">About me</h1>
                        <p>
                            I am a web developer with a background in geoinformation technology.
                        </p>
                        <p></p>
                        <p>
                            It is very important for geo-informaticians to have a sense of color and design. In a badly designed map the message can be lost - no matter how important it has been. Currently I would like to use my experience more in the space of web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutMe;