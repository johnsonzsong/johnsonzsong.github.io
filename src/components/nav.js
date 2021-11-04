import React from 'react';
import "../styles.scss";
import { Link } from "gatsby";
import avatar from "../../static/avatar.png";

const SiteNavigation = () => (
  <nav>
    <div className="avatar-container">
      <img className="avatar" src={avatar} />
    </div>
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
          <div>RESUME</div>
        </Link>
      </li>
    </ul>
    <div className="burger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
)

export default SiteNavigation