import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import ProjectTile from "../components/projectTile";
import Footer from "../components/footer";
import grHifiStatic from "../../static/placeholder.png";
import cartaProjectCover from "../../static/cartaProjectCover.png";
import cabanaProjectCover from "../../static/cabanaProjectCover.png";
import c3Logo from "../../static/c3Logo2.png";
import facebookLogo from "../../static/facebook.png";
import messengerLogo from "../../static/messenger.png";
import kangarooLogo from "../../static/kangaroo.jpeg";
import SiteNavigation from "../components/nav";

export default function Home() {
  return (
    <PageTransition>
      <Helmet>
        <script src={withPrefix("cursorScript.js")} type="text/javascript" />
        <script src={withPrefix("app.js")} type="text/javascript" />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"
          integrity="sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </Helmet>
      <SEO title="Work"></SEO>
      <SiteNavigation />

      <div className="container">
        {/* Section 1: Intro */}
        <section className="col-70">
          <div className="col-60">
            <h2>Hi, I'm Johnson.</h2>
            <p>I'm a developer and designer of products with a meticulous attention to detail and penchant for delightful experiences. </p>
            <br />
            <p>I'm currently on the Fundraising team at Meta, engineering features to power charitable donations and <a href="https://socialimpact.facebook.com/" target="_blank">social impact on Facebook.</a></p>
            <br />
            <p>Before that, I was a product design intern at <a href="https://c3.ai/" target="_blank">C3.ai</a>, designing enterprise and federal AI products for CRM, reliability, and data. Before that, I was the founding head of engineering at Kangaroo, a social storytelling app.</p>
          </div>
        </section>

        {/* Section 2: Projects */}
        <section className="col-70">
          <div className="col-70">
            <h2>Selected projects</h2>
            <ProjectTile
              route="/goodreads"
              imageSource={grHifiStatic}
              projectName="Goodreads"
              description="As an independent design study, I researched, tested, and prototyped a reimagined mobile experience for Goodreads."
              role="Independent Project | March 2021"
              // timeFrame="March 2021"
              tags={['UX Research', 'UX/UI Design']}
            />
            <ProjectTile
              route="/carta"
              imageSource={cartaProjectCover}
              projectName="Carta"
              description="I researched, designed, and tested the course search experience at Stanford. This was a case study on search/filter design patterns in the context of a complex information architecture."
              role="UX/UI Designer | Jan - June 2021"
              // timeFrame="January - June 2021"
              tags={['UX Research', 'UX/UI Design']}
            />
            <ProjectTile
              route="/daimler"
              imageSource={cabanaProjectCover}
              projectName="Daimler"
              description="As part of my senior capstone project in HCI, I helped research, design, and develop an in-vehicle gaming experience for the autonomous driving era, in partnership with Daimler (Mercedes-Benz Group AG)."
              role="Capstone Project | Jan - June 2020"
              // timeFrame="January - June 2020"
              tags={['UX Research', 'UX/UI Design', 'Coding']}
            />
          </div>
        </section>
        <Footer />
      </div>

    </PageTransition>
  );
};
