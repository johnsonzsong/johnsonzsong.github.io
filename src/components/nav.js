import React from "react";
import "../styles.scss";
import { Link } from "gatsby";

const SiteNavigation = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          JOHNSON SONG
        </Link>
      </div>
      <ul className="nav-links" >
        <li>
          <Link to="/about" activeStyle={{ color: "#00A3FF" }}>
            <div>ABOUT</div>
          </Link>
        </li>
        <li>
          <Link to="/resume" activeStyle={{ color: "#00A3FF" }}>
            <div>RESUMÉ</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SiteNavigation;
