import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs, faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons"

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="d-flex justify-content-center mb-5">
                <h1>Skills</h1>
            </div>
            <div className="container py-5 skills-box">
                <div className="col skills-col">
                        <h3>HTML5</h3>
                        <FontAwesomeIcon icon={faHtml5} size="6x" style={{ color: "#e34f26" }} />
                </div>
                <div className="col skills-col">
                        <h3>CSS3</h3>
                        <FontAwesomeIcon icon={faCss3} size="6x" style={{ color: "#016fba" }} />
                </div>
                <div className="col skills-col">
                        <h3>JavaScript ES6</h3>
                        <FontAwesomeIcon icon={faJs} size="6x" style={{ color: "#F6E018" }} />
                </div>
                <div className="col skills-col">
                        <h3>React</h3>
                        <FontAwesomeIcon icon={faReact} size="6x" style={{ color: "#62DBFB" }} />
                </div>
                <div className="col skills-col">
                        <h3>Git</h3>
                        <FontAwesomeIcon icon={faGitAlt} size="6x" style={{ color: "#F05030" }} />
                </div>
            </div>
        </div>

    );
}

export default Skills;