const Experience = () => {
    return (
        <div className="experience" id="experience">
            <div className="d-flex justify-content-center mb-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                {/* Right Block */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020 - today</h3>
                        <p>GIS-Specialist at <b>DMT Engineering Surveying GmbH {'&'} Co. KG</b></p>
                    </div>
                </div>
                {/* Left Block */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2013 - 2020</h3>
                        <p>(Student) Assistant at <b>Kempfert Geotechnik GmbH</b></p><p></p>
                    </div>
                </div>
                {/* Right Block */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018 - 2019</h3>
                        <p>Internship with subsequent master thesis at <b>Dataport AöR</b></p>
                    </div>
                </div>
                {/* Left Block */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016 - 2019</h3>
                        <p>M.Sc. Geomatics (Geodesy and Geoinformatics) at <b>HafenCity Universität Hamburg</b></p>
                        <p><b>Focus:</b> Geoinformation Technology</p>
                    </div>
                </div>
                {/* Right Block */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014 - 2016</h3>
                        <p>M.Sc. Geosciences at <b>Universität Hamburg</b></p>
                        <p><em>Early leave - change of specialization</em></p>
                    </div>
                </div>
                {/* Left Block */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2011 - 2015</h3>
                        <p>B.Sc. Geosciences at <b>Universität Hamburg</b></p>
                        <p><b>Focus:</b> Biogeochemistry</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;