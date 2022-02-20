import React from "react";
import "../styles.scss";
import { Link } from "gatsby";

const SiteNavigation = () => {
  return (
    <div className="nav">
      <h3 className="logo">
        <Link to="/">
          <div className="active">
            Johnson Song
          </div>
        </Link>
      </h3>
      <div className="nav-links" >
        {/* <li> */}
        <Link to="/" activeStyle={{ color: "#62AFF6" }}>
          Work
        </Link>
        {/* </li> */}
        {/* <li> */}
        <Link to="/about" activeStyle={{ color: "#62AFF6" }}>
          About
        </Link>
        {/* </li> */}
        {/* <li> */}
        <Link to="/resume" activeStyle={{ color: "#62AFF6" }}>
          Resumé
        </Link>
        {/* </li> */}
      </div>
    </div>
  );
};

export default SiteNavigation;
