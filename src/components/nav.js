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
      <ul className="nav-links" >
        <li>
          <Link to="/" activeClassName="active">
            <div>Work</div>
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            <div>About</div>
          </Link>
        </li>
        <li>
          <Link to="/resume" activeClassName="active">
            <div>Resumé</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SiteNavigation;
