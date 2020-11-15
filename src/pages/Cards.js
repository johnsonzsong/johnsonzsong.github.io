import React from "react";
import { Helmet } from "react-helmet"
import "../styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from '@material-ui/core/Grid';
import cardsFeature2 from "../../static/cardsFeature2.jpg";
import cardsLink from "../../static/Design Cards for Educators.pdf";
import allCards from "../../static/allCards.jpg";

export default function Cabana() {
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Design Cards for Educators - Johnson Song</title>
      </Helmet>
      <div className="container">
        <Header/>
        <div className="display">
          <div className="displayTitle">
            Design Cards for Educators
          </div>
          <div className="displayBody">
            <strong>
              A deck of 20 cards that challenge middle school educators to think critically about designing for inclusivity inside and outside of the classroom.
            </strong>
          </div>
          <img 
            style={{maxWidth: "100%", margin: "24px 0px"}}
            src={cardsFeature2}
          />
        </div>
        <div className="banner">
          <Grid container spacing={1}>
            <Grid className="bannerSection" item xs={12} sm={4}>
            <div className="bannerHeader">
              Context
            </div>
            <p> 
              In FEMGEN344F: Beyond Pink and Blue, I designed a deck of cards with different prompts and activities to guide middle school educators in fostering discussions about inclusiveness among their students.
            </p>
            </Grid>
            <Grid className="bannerSection" item xs={12} sm={4}>
              <div className="bannerHeader">
                Role
              </div>
              <p> Principal Product Designer </p>
              <div className="bannerHeader mt-small">
                Duration
              </div>
              <p> May 2020 </p>
            </Grid>
            <Grid className="bannerSection" item xs={12} sm={4}>
              <div className="bannerHeader">Tools</div>
              <p>Figma, Journey Mapping, User Personas</p>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="sectionHeader">Problem</div>
              <p>
              Understanding intersectional identities and being able to empathize with identities that are separate from one's own starts at a young age. This means recognizing implicit biases, addressing race, gender, socio-economic status, and ability so that we can support each other as human beings.
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="quoteWrapper">
                <div className="quote">
                  How might we equip educators to empower middle school students to reframe awkward or uncomfortable conversations about identity?
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="sectionHeader">Solution</div>
              <p>
              This deck of cards is separated into 4 categories:
                <ul>
                  <li>All-Inclusive</li>
                  <li>Mind of a Middle Schooler</li>
                  <li>Remember to Think About</li>
                  <li>How to...</li>
                </ul>
                Each category is meant to highlight a different design prompt for middle school educators. What's great about these cards is that they are not just limited to use inside the classroom by teachers. They can just as effectively be used in workshops to train camp counselors, teachers, and coaches on how to design inclusively in order to reframe conversations with middle schoolers!
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>
                View all cards or download a PDF of them by clicking below!
                <a href={cardsLink} target="_blank"> 
                  <img className="processImage" src={allCards} />
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
        <Footer/>
      </div>
    </div>
  );
}