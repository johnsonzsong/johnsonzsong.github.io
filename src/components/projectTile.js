import React from "react";
import "../styles.scss";
import { Link } from "gatsby";

const tagColorMap = {
  'Mobile': '#E7F6FF',
  'Desktop': '#FFF1D6',
  'In-Vehicle System': '#FFD6F3'
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
    <div className="project card">
      <Link className="project-image-container" to={route}>
        <img className="project-image" src={imageSource} alt={projectName}></img>
      </Link>
      <div className="project-content card-content">
        <Link to={route}>
          <h3>{projectName}</h3>
        </Link>
        {tags.map((tag) => {
          return <div className="tag" key={tag} style={{
            backgroundColor: tagColorMap[tag]
          }}
          >{tag}</div>
        })}
        <h4>{description}</h4>
        <Link to={route}>
          <div className="project-link">
            View project &#10230;
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTile;
