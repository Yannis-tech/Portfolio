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
                            I am a GIS Specialist with a huge interest in new technology.
                        </p>
                        <p></p>
                        <p>I am a well-organized person, a problem solver, and tend to grasp things quickly, especially software that is unknown to me. I always strive to learn about new topics and have a serious sense of responsibility.</p>
                        <p>Currently, I seek to combine my good knowledge of geoinformatics with web development to tackle exciting new problems.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutMe;