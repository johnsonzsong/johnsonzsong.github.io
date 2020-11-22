import React from "react";
import { Helmet } from "react-helmet"
import FigmaEmbed from 'react-figma-embed';
import "../styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from '@material-ui/core/Grid';
import cabanaFeature from "../../static/cabanaFeature.png";
import cabana1 from "../../static/cabana1.jpg";
import cabanaUser1 from "../../static/cabanaUser1.svg";
import cabanaUser2 from "../../static/cabanaUser2.svg";
import cabanaBrainstorm1 from "../../static/cabanaBrainstorm1.svg";
import cabanaBrainstorm2 from "../../static/cabanaBrainstorm2.svg";
import cabanaDaimler1 from "../../static/cabanaDaimler1.jpg";
import cabanaPrototype1 from "../../static/cabanaPrototype1.jpg";
import cabanaPrototype2 from "../../static/cabanaPrototype2.jpg";
import cabanaWireframe1 from "../../static/cabanaWireframe1.svg";
import cabanaWireframe2 from "../../static/cabanaWireframe2.svg";
import cabanaMoodboard from "../../static/cabanaMoodboard.svg";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import {useDarkMode} from "../useDarkMode";

const Cabana = () => {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div className="body">
      <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cabana - Johnson Song</title>
      </Helmet>
      <div className="container">
        <Header theme={themeMode}/>
        <div className="display">
          <div className="displayTitle">
            Cabana Trivia
          </div>
          <div className="displayBody">
            <strong>
              In-vehicle gaming experience for Mercedes-Benz head units.</strong>
          </div>
          <a href="https://master-dev.d28ds4nnoxwdjw.amplifyapp.com/"   
            target="_blank">
            <img className="featureImage" src={cabanaFeature}/>
          </a>
        </div>
        <div className="banner">
          <Grid container spacing={1}>
            <Grid className="bannerSection" item xs={12} sm={4}>
            <div className="bannerHeader">
              Context
            </div>
            <p> 
              We partnered with Daimler to create a multiplayer touchscreen game for the Mercedes-Benz Head Unit in the autonomous driving era.
            </p>
            </Grid>
            <Grid className="bannerSection" item xs={12} sm={4}>
              <div className="bannerHeader">
                Role
              </div>
              <p> User Research, UX/UI Design, and Front End Developer </p>
              <div className="bannerHeader mt-small">
                Duration
              </div>
              <p> January - June 2020 </p>
            </Grid>
            <Grid className="bannerSection" item xs={12} sm={4}>
              <div className="bannerHeader">Tools</div>
              <p>React, Figma, Firebase</p>
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
              <div className="quoteWrapper">
                <div className="quote">
                  "What kinds of games would be good in the car?"
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <div className="sectionHeader">User Studies</div>
          <p>
            My team conducted user studies by observing and interviewing Tesla owners at Supercharger stations. We wanted to gain a better understanding of how owners of autonomous and electric vehicles spent those moments of down-time while waiting for their vehicles to charge. We also took a trip to the nearby Palo Alto Tesla dealership to learn more about the current status of in-car gaming from Tesla employees and electric vehicle owners. Below are two  <strong>user personas</strong> to represent the aggregate profile of over <strong>50 total interviews</strong>.
          </p>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="userPersonaCard">
                <div className="userInfoRow">
                  <img className="userPhoto" src={cabanaUser1} />
                  <div className="userInfoText">
                    <div>Neil</div>
                    <p>Age: 30s</p>
                    <p>Location: Hawaii</p>
                  </div>
                </div>
                <div className="userInsights">
                  <p>Charges 5 times a week in order to reserve the Electric Vehicle parking spaces at his condo</p>
                  &#9889;
                  <p>Keeps hands on wheel even in autopilot</p>
                  &#9889;
                  <p>Mentioned Tesla Caraoke is too distracting and shouldn’t be allowed</p>
                  &#9889;
                  <p>Has nausea when using phone inside car</p>
                  &#9889;
                  <p>Never plays games while charging, since he’s running errands</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="userPersonaCard">
                <div className="userInfoRow">
                  <img className="userPhoto" src={cabanaUser2} />
                  <div className="userInfoText">
                    <div>Alex</div>
                    <p>Age: 50s</p>
                    <p>Location: Palo Alto</p>
                  </div>
                </div>
                <div className="userInsights">
                  <p>Has only played in-vehicle games once to try and show his children</p>
                  &#9889;
                  <p>His children also have only tried in-vehicle games once or twice, quickly deferring to other forms of entertainment (smart phones, TV, etc.)</p>
                  &#9889;
                  <p>Never thinks to play in-car games in free time</p>
                  &#9889;
                  <p>Tries to plan it so he’s being productive when charging, such as charging while at work, at a restaurant, or in his house</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <div className="sectionHeader">Brainstorm and Affinity Mapping</div>
          <Grid container spacing={1}>
            <Grid className="processImageWrapper" item xs={12} sm={6}>
              <img className="processImage" src={cabanaBrainstorm1} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="centeredTextWrapper">
                <p>My team then went through many ideation stages, first coming up with as many games as possible and then narrowing them down based on our findings and constraints. Some of our initial ideas from the first brainstorming session included board games like LIFE and Monopoly, immersive experiences like Mario Kart and Pokemon Go, and old school games like Pac-Man and Space Invaders.</p>
              </div>
            </Grid>
            <Grid className="processImageWrapper" item xs={12} sm={6}>
              <img className="processImage" src={cabanaBrainstorm2} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="centeredTextWrapper">
                <p>In the second round of brainstorming, we focused on aspects of the in-car gaming experience we wanted to emphasis. We knew that the game should capitalize on the unique circumstances and people inside of the car. We grouped these ideas into an affinity map to help structure our goals.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="centeredTextWrapper">
                <p>With helpful feedback from our Daimler liaisons, we decided to move forward with 3 ideas: trivia, karaoke, and Draw Something. We brought our user research, insights, and brainstorm to our Daimler liaisons in their Sunnyvale office and received valuable feedback to consider moving forward in our prototyping stages.</p>
              </div>
            </Grid>
            <Grid className="processImageWrapper" item xs={12} sm={6}>
              <img className="processImage" src={cabanaDaimler1} />
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <div className="sectionHeader">Rapid Prototyping</div>
          <Grid container spacing={1}>
            <Grid className="processImageWrapper" item xs={12} sm={6}>
              <img className="processImage" src={cabanaPrototype1} />
            </Grid>
            <Grid className="processImageWrapper" item xs={12} sm={6}>
              <img className="processImage" src={cabanaPrototype2} />
            </Grid>
            <Grid item xs={12}>
              <p>We rapidly-prototyped these 3 ideas by creating quick pen-and-paper versions of each game, which meant to test the interactions that friends and family playing together would have. Then, we set up a car-like experience by arranging chairs as if they were the seats in a car, and taping a makeshift head-unit display to the wall in front of them.</p>
            </Grid>
          </Grid>
        </div>

        <div className="section">
          <div className="sectionHeader">Key Insights</div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <div className="insightCard">
                <div className="insightNumber">1</div>
                People love inside jokes
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="insightCard">
                <div className="insightNumber">2</div>
                Humans are competitive!
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="insightCard">
                <div className="insightNumber">3</div>
                People want a chance to redeem themselves if they lose
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="section">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="sectionHeader">Wireframes and Design</div>
              <p>
                Among the games that we rapidly-prototyped, we felt that trivia offered the best mixture of positive feedback from testers, alignment with Daimler's vision, and our timeframe. We went ahead and started to create simple wireframes for our medium-fidelity prototype. Some key features that we were sure to keep in mind were designing for a touch-screen, designing for use by multiple people at various distances, and creating an intuitive, uncluttered interface.
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="processImageWrapper">
              <img className="processImageSwitchBottom" src={cabanaWireframe2}/>
              <img className="processImageSwitchTop" src={cabanaWireframe1}/>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="processImageWrapper">
              <img className="processImage" src={cabanaMoodboard}/>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="centeredTextWrapper">
              <p>
                We used a moodboard to get at the core essence of the ambience (aka ~vibe~) we wanted for the game. We wanted the game, and more importantly, the entire in-vehicle gaming experience to exude <strong>futuristic</strong> yet <strong>familiar</strong>, <strong>sleek</strong>, <strong>luxurious</strong>, and <strong>bold</strong>.
              </p>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="section">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="sectionHeader">Final Result</div>
              <p>
                Before diving into development, we created a fully-interactive high-fidelity prototype of the trivia experience. We combined our findings from our early rapid prototyping stages to infuse the app with a vision for a delightful, collaborative, and competitive in-vehicle gaming experience. For development, we used React on the frontend UI paired with Firebase to store player data like usernames and high scores. Check out our <strong> interactive prototype below</strong>. But don't stop there -- you can actually play our live game by clicking on the <strong> play button! </strong>
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="centeredTextWrapper">
                <a href="https://master-dev.d28ds4nnoxwdjw.amplifyapp.com/"   
            target="_blank" className="playCabanaButton">
                  PLAY
                </a>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="section">
          <FigmaEmbed className="figmaEmbed" url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fwgkf0Bb5YrHXKGYLv3OfVI%2FCS210-Cabana-Trivia-Master%3Fnode-id%3D252%253A3%26scaling%3Dscale-down&chrome=DOCUMENTATION"/>
        </div>
        
        <Footer/>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default Cabana;