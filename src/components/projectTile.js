import React from "react";
import "../styles.scss";
import { Link } from "gatsby";

const tagColorMap = {
  'UX Research': '#E7F6FF',
  'UX/UI Design': '#FFF1D6',
  'Coding': '#FFD6F3'
};

const ProjectTile = ({
  route,
  imageSource,
  projectName,
  disabledLink,
  description,
  role,
  timeFrame,
  tags
}) => {
  return (
    <div className="project">
      <Link className="project-image-container" to={route}>
        <img className="project-image" src={imageSource} alt={projectName}></img>
      </Link>
      <div className="project-content">
        <Link to={route}>
          <h3>{projectName}</h3>
        </Link>
        <p>{description}</p>
        <div className="tag-container">
          {tags.map((tag) => {
            return <div className="tag" key={tag} style={{
              backgroundColor: tagColorMap[tag]
            }}
            >{tag}</div>
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
