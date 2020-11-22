import React from "react";
import { Helmet } from "react-helmet"
import "../styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from '@material-ui/core/Grid';
import planitFeature from "../../static/planitFeature.png";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import {useDarkMode} from "../useDarkMode";

const Planit = () => {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div className="body">
      <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Planit - Johnson Song</title>
      </Helmet>
      <div className="container">
        <Header theme={themeMode}/>
        <div className="display">
          <div className="displayTitle">
            Planit
          </div>
          <div className="displayBody">
            <strong>
            A gamified approach to travel-planning that emphasizes strong ties.</strong>
          </div>
          <img className="featureImage" src={planitFeature}/>
        </div>
        <div className="banner">
          <Grid container spacing={1}>
            <Grid className="bannerSection" item xs={12} sm={4}>
            <div className="bannerHeader">
              Context
            </div>
            <p> 
            We created an Android app to make travel planning fun while instilling confidence in trustworthy plans.
            </p>
            </Grid>
            <Grid className="bannerSection" item xs={12} sm={4}>
              <div className="bannerHeader">
                Role
              </div>
              <p> Android Developer, Front End Developer, and User Research </p>
              <div className="bannerHeader mt-small">
                Duration
              </div>
              <p> September - December 2018 </p>
            </Grid>
            <Grid className="bannerSection" item xs={12} sm={4}>
              <div className="bannerHeader">Tools</div>
              <p>Android Studio, Figma, HTML/CSS</p>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="sectionHeader">Problem</div>
              <p>
              We sought to help travelers overcome the familiar struggles of planning for their destination trips: not being confident in their plans without the input and approval of family and friends, who were generally unmotivated to respond.
              </p>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <div className="processImageWrapper">
                <img className="processImage" src={cabana1}/>
              </div>
            </Grid> */}
          </Grid>
        </div>
        {/* <div className="sectionHeader">User Studies</div>
        <p>
          My team conducted user studies by observing and interviewing Tesla owners at Supercharger stations. We wanted to gain a better understanding of how owners of autonomous and electric vehicles spent those moments of down-time while waiting for their vehicles to charge. We also took a trip to the nearby Palo Alto Tesla dealership to learn more about the current status of in-car gaming from Tesla employees, as well as to have more conversations with owners.
        </p>
        <div className="section">
          <div className="questionsTitle">
            We asked questions like...
          </div>
          <div className="questionsContent">
            <ul>
              <li>What do you or your passengers do while you are driving or waiting to charge? </li>
              <li>What do you do in the car when autopilot is on?</li>
              <li>When and how often do you play the built-in games in your car?</li>
            </ul>
          </div>
        </div> */}

        {/* Mostly middle-aged men (Merceds target group) were interviewed 
They all said they like to drive, not very interested in self-driving/does not trust it
Not interested in the games, tested it maybe once 
When played, usually related to their kids who have played a few times
Most people don’t stay in their cars when charging. They run other errands 
If they stay in the car, everyone (except for one couple who tried the games for the first time) were on their phones  */}


        {/* <p>
          There were some of our insights from over 50 total interviews.
        </p> */}
        <Footer/>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default Planit;
