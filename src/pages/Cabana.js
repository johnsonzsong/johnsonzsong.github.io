import React from "react";
import "../styles.scss";
import Header from "../components/Header";
import Grid from '@material-ui/core/Grid';
import cabanaFeature from "../../static/cabanaFeature.png";

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
        <div className="sectionHeader">Problem</div>
        <p>
          As autonomy and electric vehicle charging become more established in the automotive industry, people will have more time on their hands. Whether waiting for their cars to charge or waiting to pick up a child from school, drivers will have an opportunity to engage in in-vehicle entertainment during these times.
        </p>
      </div>
    </div>
  );
}
