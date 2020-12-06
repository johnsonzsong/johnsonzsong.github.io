import React from "react";
import { Helmet } from "react-helmet"
import "../styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from '@material-ui/core/Grid';
import stealthFeature from "../../static/stealthFeature.png";
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
        <title>Stealth Startup - Johnson Song</title>
      </Helmet>
      <div className="container">
        <Header theme={themeMode} />
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
              <strong>Stealth</strong> -  intended not to attract attention.
              <br></br><br></br>
              It wouldn't be very "stealth" of me to disclose the exact details of this project &#128521;. However, feel free to reach out and I'd be happy to share what I can. It's an exciting trek into the interactive media space, and we're expected to launch in 2021...stay tuned!
              </p>
            </Grid>
          </Grid>
        </div>
        <Footer/>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default Planit;