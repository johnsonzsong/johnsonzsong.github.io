import React from 'react';
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
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import {useDarkMode} from "../useDarkMode";

const Home = () => {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const themeString = theme === 'light' ? "light" : "dark";

  return (
    <div className="body">
    <ThemeProvider theme={themeMode}>
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
            I'm continually adding project highlights and sandbox features
            <br/>
              like this
              <button className="toggleButton" onClick={setTheme}>
                <p>{themeString} theme</p>
              </button>
              toggle
          </div>
        </div>
        <Header theme={themeMode}/>
        <div className="display">
          <div className="displayTitle"> Hi, I'm Johnson </div>
          <div className="displayBody">
            I am a master’s student at Stanford, studying human-computer interation. I'm also the <strong>engineering lead at a stealth startup</strong> in the interactive media space.
            <br/><br/>
            Previously, I was a software engineering intern on <strong>Facebook Gaming</strong> and <strong>Messenger</strong>.
          </div>
        </div>
        <div className="projects">
          <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
              <Link to="/Stealth" state={{theme: themeMode}}>
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
              <Link to="/Cabana" state={{theme: themeMode}}>
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
              <Link to="/Cards" state={{theme: themeMode}}>
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
              <Link to="/Planit" state={{theme: themeMode}}>
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

export default Home;