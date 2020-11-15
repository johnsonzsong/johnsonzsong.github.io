import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from '@material-ui/core/Grid';
import planitFeature from "../../static/planitFeature.png";
import cabanaFeature from "../../static/cabanaFeature.png";
import stealthFeature from "../../static/stealthFeature.png";
import cardsFeature from "../../static/cardsFeature.svg";
import { Link } from "gatsby";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

export default function Home() {
  const [theme, setTheme] = useState(lightTheme);
  const [themeString, setThemeString] = useState("light");

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setThemeString("dark")
    }
    else {
      setTheme(lightTheme);
      setThemeString("light")
    }
  };

  return (
    <div className="body">
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Johnson Song - Home</title>
      </Helmet>
      <div className="container">
        <div className="notificationWrapper">
          <div className="notification">
            &#128679;&#128679;
            <br/>
            This website currently under hand-construction...
            <br/>
            I'm continually adding project highlights and fun features
            <br/>
              like this
              <button className="toggleButton" onClick={toggleTheme}>
                <p>{themeString} theme</p>
              </button>
              toggle
            <br/>
            Feel free to <a href="mailto:johnsonsong@stanford.edu?subject=Hey%20Johnson!"> say hi </a> in the meantime!
          </div>
        </div>
        <Header/>
        <div className="display">
          <div className="displayTitle"> Renaissance Technologist </div>
          <div className="displayBody">
            I am a master’s student at Stanford, studying human-computer interation. I'm also the <strong>engineering lead at a stealth startup</strong> in the interactive media space.
            <br/><br/>
            Previously, I was a <strong>software engineering intern on Facebook Gaming and Messenger</strong>.
          </div>
        </div>
        <div className="projects">
          <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
              <Link to="/Stealth">
                <div className="projectSquare">
                  <img className="featureImage" src={stealthFeature} />
                  <div className="overlay">
                    <div className="overlayProjectName"> Stealth Startup</div>
                    <p> Engineering Lead, React, TypeScript, and Firebase </p>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="/Cabana">
                <div className="projectSquare">
                  <img className="featureImage" src={cabanaFeature} />
                  <div className="overlay">
                    <div className="overlayProjectName"> Cabana Trivia </div>
                    <p> User Research, UX/UI, React, and Firebase</p>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="/Cards">
                <div className="projectSquare">
                  <img className="featureImage" src={cardsFeature} />
                  <div className="overlay">
                    <div className="overlayProjectName"> Design Cards for Educators </div>
                    <p> User Research and Product Design</p>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="/Planit">
                <div className="projectSquare">
                  <img className="featureImage" src={planitFeature} />
                  <div className="overlay">
                    <div className="overlayProjectName"> Planit </div>
                    <p> User Research, UX/UI, Android, and HTML/CSS</p>
                  </div>
                </div>
              </Link>
            </Grid>
          </Grid>
        </div>
        <Footer/>
      </div>
      </ThemeProvider>
    </div>
  );
}
