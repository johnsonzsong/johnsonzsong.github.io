import React from "react";
import "../styles.scss";
import { Link } from "gatsby";
import avatar from "../../static/avatar.png";
import resume from "../../static/Johnson_Song_Resume.pdf";

export default function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <div className="avatarWrapper">
          <img src={avatar}/>
        </div>
        <div className="name"> Johnson Song </div>
      </Link>
      <a className="resume" href={resume} target="_blank">
        Resume
      </a>
    </div>
  );
}
