import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Web Developer</h1>
            <Typed
                className="typed-text"
                strings={["HTML5", "CSS3", "Javascript ES6", "React", "Bootstrap", "Git"]}
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