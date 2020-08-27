import React from "react";
import "../styles.scss";
import Header from "../components/Header";
import Grid from '@material-ui/core/Grid';
import cabanaFeature from "../../static/cabanaFeature.png";
import cabana1 from "../../static/cabana1.jpg";

export default function Cabana() {
  return (
    <div className="body">
      <div className="container">
        <Header/>
        <div className="display">
          <div className="displayTitle">
            Cabana Trivia
          </div>
          <div className="displayBody">
            <strong>
              In-vehicle gaming experience for Mercedes-Benz head units.</strong>
          </div>
          <img className="featureImage" src={cabanaFeature}/>
        </div>
        <div className="banner">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
            <div className="bannerHeader">
              Context
            </div>
            <p> 
              We partnered with Daimler to create a multiplayer touchscreen game for the Mercedes-Benz Head Unit in the autonomous driving era.
            </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="bannerHeader">
                Role
              </div>
              <p> User Research, UX/UI Design, and Front End Developer </p>
              <div className="bannerHeader mt-small">
                Duration
              </div>
              <p> January - June 2020 </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="bannerHeader">Tools</div>
              <p>Figma, React, Firebase</p>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="sectionHeader">Problem</div>
              <p>
                As autonomy and electric vehicle charging become more established in the automotive industry, people will have more time on their hands. Whether waiting for their cars to charge or waiting to pick up a child from school, drivers will have an opportunity to engage in in-vehicle entertainment during these times. Our partners at Daimler wondered...
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <div className="processImageWrapper">
                <img className="processImage" src={cabana1}/>
              </div> */}
              <div className="quoteWrapper">
                <div className="quote">
                  "What kind of games would be good in the car?"
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="sectionHeader">User Studies</div>
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
        </div>

        {/* Mostly middle-aged men (Merceds target group) were interviewed 
They all said they like to drive, not very interested in self-driving/does not trust it
Not interested in the games, tested it maybe once 
When played, usually related to their kids who have played a few times
Most people don’t stay in their cars when charging. They run other errands 
If they stay in the car, everyone (except for one couple who tried the games for the first time) were on their phones  */}


        <p>
          There were some of our insights from over 50 total interviews.
        </p>
      </div>
    </div>
  );
}
