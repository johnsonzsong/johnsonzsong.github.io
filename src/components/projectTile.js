import React from 'react';
import "../styles.scss";
import { Link } from "gatsby";

const ProjectTile = ({
    route,
    imageSource,
    projectName,
    disabledLink,
    description,
    role,
    timeFrame
}) => {
    return (
        <div className="project">
            {!disabledLink &&
                <Link to={route}>
                    <div className="image-container nb p-32">
                        <img style={{ width: "100%" }} src={imageSource}></img>
                    </div>
                </Link>
            }
            {disabledLink &&
                <div className="image-container nb">
                    <img style={{ width: "100%" }} src={imageSource}></img>
                </div>
            }
            {!disabledLink &&
                <Link to={route}>
                    <div className="project-overlay">
                        <div className="row">
                            <p className="fs-med">
                                <b>{projectName}</b>
                            </p>
                        </div>
                        <p className="a-60">{role}</p>
                        <p className="a-60">{timeFrame}</p>
                        <br />
                        <p>
                            {description}
                        </p>
                        <Link to={route}>
                            <div className="project-link">
                                Read more about {projectName} &#10230;
                            </div>
                        </Link>
                    </div>
                </Link>
            }
            {disabledLink &&
                <div className="project-overlay">
                    <div className="row">
                        <p className="fs-med">
                            <b>{projectName}</b>
                        </p>
                    </div>
                    <p className="a-60">{role}</p>
                    <p className="a-60">{timeFrame}</p>
                    <br />
                    <p>
                        {description}
                    </p>
                    {role &&
                        <a href="mailto:johnsonsong@stanford.edu" className="project-link">
                            Contact me directly about this project.
                        </a>
                    }
                </div>
            }

        </div>
    );
}

export default ProjectTile