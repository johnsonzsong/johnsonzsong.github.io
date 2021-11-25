import React from "react";
import "../styles.scss";
import { Link } from "gatsby";

const SiteNavigation = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo">JOHNSON SONG</div>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/" activeStyle={{ color: "#00A3FF" }}>
            <div>WORK</div>
          </Link>
        </li>
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
      <div className="burger">
        <div className="burger-line"></div>
      </div>
    </nav>
  );
};

export default SiteNavigation;
