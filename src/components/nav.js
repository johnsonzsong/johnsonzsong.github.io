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
          <Link to="/"
            activeStyle={{
              border: "2px solid #62AFF6",
              borderRadius: 8
            }}
          >
            Work
          </Link>
          <Link to="/about"
            activeStyle={{
              border: "2px solid #62AFF6",
              borderRadius: 8
            }}
          >
            About
          </Link>
          <Link to="/resume"
            activeStyle={{
              border: "2px solid #62AFF6",
              borderRadius: 8
            }}
          >
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
