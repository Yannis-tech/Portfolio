import Typist from 'react-text-typist';

const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h3>Yannis Pigorsch</h3>
                <h1>GIS Specialist / Web Developer</h1>
                <Typist
                    className="typed-text"
                    sentences={["HTML5", "CSS3", "Javascript ES6", "React", "SQL", "Git", "Geographic Information Systems", "FME"]}
                    pauseTime={1000}
                    typeSpeed={40}
                    backSpeed={60}  
                    backDelay={3000}  
                    loop          
                />
                <a href="#contact" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    );
}

export default Header;