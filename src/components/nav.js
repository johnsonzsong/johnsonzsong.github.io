import React from "react";
import "../styles.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import resumePDF from "../../static/Johnson_Song_Resume.pdf";

const SiteNavigation = () => {
  return (
    <div className="nav">
      <a href="/">
        J
      </a>
      <a href={resumePDF} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFile} />
      </a>
      <a href="mailto:johnsonsong@stanford.edu">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://www.linkedin.com/in/johnsonsong/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="http://instagram.com/johnson.song"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default SiteNavigation;
