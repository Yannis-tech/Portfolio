import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development</h1>
            <Typed
                className="typed-text"
                strings={["Web Design", "Web Development", "Geodata", "GIS"]}
                typeSpeed={40}
                backSpeed={60}  
                backDelay={3000}  
                loop          
            />
            <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    );
}

export default Header;