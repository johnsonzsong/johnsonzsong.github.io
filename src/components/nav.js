import React from "react";
import "../styles.scss";
import { Link } from "gatsby";

const SiteNavigation = () => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="nav">
        <h3 className="logo">
          <Link to="/">
            <div className="active">
              Johnson Song
            </div>
          </Link>
        </h3>
        <div className="nav-links" >
          <Link to="/" activeStyle={{ color: "#62AFF6" }}>
            Work
          </Link>
          <Link to="/about" activeStyle={{ color: "#62AFF6" }}>
            About
          </Link>
          <Link to="/resume" activeStyle={{ color: "#62AFF6" }}>
            Resumé
          </Link>
        </div>
        <div className="burger">
          <div className="burger-line"></div>
        </div>
      </div>
    </div>
  );
};

export default SiteNavigation;
