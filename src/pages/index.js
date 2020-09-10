import React from "react";
import { Helmet } from "react-helmet"
import "../styles.scss";
import Header from "../components/Header";
import Grid from '@material-ui/core/Grid';
import planitFeature from "../../static/planitFeature.png";
import cabanaFeature from "../../static/cabanaFeature.png";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Johnson Song - Home</title>
      </Helmet>
      <div className="notificationWrapper">
        <div className="notification">
          &#128679;Website currently under construction...&#128679; <br/>
          Feel free to <a href="mailto:johnsonsong@stanford.edu?subject=Hey%20Johnson!"> say hi </a> in the meantime!
        </div>
      </div>
      <div className="container">
        <Header/>
        <div className="display">
          <div className="displayTitle"> Renaissance Technologist </div>
          <div className="displayBody">
            I recently completed my undergraduate studies at Stanford with a major in computer science and minor in economics. Currently, I am a master’s student at Stanford, studying human-computer interation. Previously, I was a software engineering intern on Facebook Gaming and Messenger.
          </div>
        </div>
        <div className="projects">
          <Grid container spacing={1}>
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
      </div>
    </div>
  );
}
