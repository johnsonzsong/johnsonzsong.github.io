import React from 'react';
import "../styles.scss";
import { Link } from "gatsby";

const SiteNavigation = () => (
    <nav id="nav-container">
      <Link to="/" activeStyle={{ color: "#00A3FF" }}><div>WORK</div></Link>
        <Link to="/about" activeStyle={{ color: "#00A3FF" }}><div>ABOUT</div></Link>
        <Link to="/resume" activeStyle={{ color: "#00A3FF" }}><div>RESUME</div></Link>
    </nav>
  )

  export default SiteNavigation