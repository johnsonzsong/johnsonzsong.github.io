import React from "react";
import "../styles.scss";
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconContext } from "react-icons";

const ICON_COLOR = "rgba(198, 232, 251, 0.3)";

export default function Footer() {
  return (
    <div className="footer">
      <IconContext.Provider value={{ color: "#c6e8fb" }}>
        <a className="footerIcon" href="https://www.instagram.com/johnson.song/" target="_blank">
          <FaInstagram size={36} />
        </a>
      </IconContext.Provider>

      <IconContext.Provider value={{ color: "#c6e8fb" }}>
        <a className="footerIcon" href="mailto:johnsonsong@stanford.edu" target="_blank">
          <FaEnvelope size={36}/>
        </a>
      </IconContext.Provider>

      <IconContext.Provider value={{ color: "#c6e8fb" }}>
      <a className="footerIcon" href="https://www.linkedin.com/in/johnsonsong/" target="_blank">
        <FaLinkedin size={36}/>
      </a>
      </IconContext.Provider>
    </div>
  );
}
