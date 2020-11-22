import React from "react";
import "../styles.scss";
import { Link } from "gatsby";
import avatar from "../../static/avatar.png";
import resume from "../../static/Johnson_Song_Resume.pdf";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';

const Header = ({theme}) => {
  return (
    <div className="header">
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Link className="logo" to="/">
        <div className="avatarWrapper">
          <img src={avatar}/>
        </div>
        <div className="name"> Johnson Song </div>
      </Link>
      <a className="resume" href={resume} target="_blank">
        Resume
      </a>
      </ThemeProvider>
    </div>
  );
}

export default Header;
