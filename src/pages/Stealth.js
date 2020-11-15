import React from "react";
import { Helmet } from "react-helmet"
import "../styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from '@material-ui/core/Grid';
import stealthFeature from "../../static/stealthFeature.png";

export default function Planit() {
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stealth Startup - Johnson Song</title>
      </Helmet>
      <div className="container">
        <Header/>
        <div className="display">
          <div className="displayTitle">
            Stealth Startup
          </div>
          <img className="featureImage" src={stealthFeature}/>
        </div>
        <div className="banner">
          <Grid container spacing={1}>
            <Grid className="bannerSection" item xs={12} sm={4}>
            <div className="bannerHeader">
              Context
            </div>
            <p> 
            I am currently the engineering lead at a stealth startup in the interactive media space.
            </p>
            </Grid>
            <Grid className="bannerSection" item xs={12} sm={4}>
              <div className="bannerHeader">
                Role
              </div>
              <p> Engineering Lead </p>
              <div className="bannerHeader mt-small">
                Duration
              </div>
              <p> September 2020 - Present </p>
            </Grid>
            <Grid className="bannerSection" item xs={12} sm={4}>
              <div className="bannerHeader">Tools</div>
              <p>React, TypeScript, Firebase</p>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="sectionHeader">Coming Soon...</div>
              <p>
              It wouldn't be very "stealth" of me to disclose all the research surrounding the fascinating problems our team has been working on over the past few months, would it? &#128521; Not to worry, we are making progress every single day and will be launching a beta version of our app in 2021...stay tuned!
              </p>
            </Grid>
          </Grid>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
