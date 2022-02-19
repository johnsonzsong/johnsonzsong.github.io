import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import ProjectTile from "../components/projectTile";
import Footer from "../components/footer";
import c3Logo from "../../static/c3Logo.png";
import grLogo from "../../static/grLogo.png";
import cartaLogo from "../../static/cartaLogo.svg";
import daimlerLogo from "../../static/daimlerLogo.png";
import SiteNavigation from "../components/nav";
import { BsArrowDown } from "react-icons/bs";

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
      <SEO title="Home"></SEO>
      <SiteNavigation />

      <div className="container">
        <div className="col-80" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}>
          <h1>Johnson Song</h1>
          <p>Software engineer <a href="https://about.facebook.com/meta" target="_blank">@Meta</a></p>
          <p>Alum <a href="https://www.stanford.edu/" target="_blank">@Stanford</a></p>
          <div style={{ height: "64px" }}></div>
          <i>
            <p>Previously - </p>
          </i>
          <p>Product design intern <a href="https://c3.ai/" target="_blank">@C3.ai</a></p>
          <p>Head of Engineering <a href="https://kangaroointeractive.com/" target="_blank">@Kangaroo</a></p>
          <p>Software engineering intern <a href="https://www.messenger.com/" target="_blank">@Messenger</a></p>
        </div>


        <div className="container col-80">
          <section
            id="section-two"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>SOME THINGS I'VE DESIGNED...</h2>
            <div className="project-row">
              <ProjectTile
                imageSource={c3Logo}
                disabledLink
                projectName="C3.ai"
                description="Designing enterprise AI."
                role="Internship | June - August 2021"
              // timeFrame="June - August 2021"
              />
              <ProjectTile
                route="/goodreads"
                imageSource={grLogo}
                projectName="Goodreads"
                description="Redesigning social reading."
                role="Independent Project | March 2021"
              // timeFrame="March 2021"
              />
              <ProjectTile
                route="/carta"
                imageSource={cartaLogo}
                projectName="Carta"
                description="Designing the course search experience at Stanford."
                role="UX/UI Designer | Jan - June 2021"
              // timeFrame="January - June 2021"
              />
              <ProjectTile
                route="/daimler"
                imageSource={daimlerLogo}
                projectName="Daimler"
                description="Creating a gaming experience for autonomous driving."
                role="Capstone Project | Jan - June 2020"
              // timeFrame="January - June 2020"
              />
            </div>
          </section>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "8em",
            }}
          >
            <h2>...AND SOME THINGS I'VE DEVELOPED</h2>
            <div
              className="col-50"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <img
                className="avatar"
                src="messenger.png"
                alt="messenger logo"
              />
              <img className="avatar" src="facebook.png" alt="facebook logo" />
              <img className="avatar" src="kangaroo.jpeg" alt="kangaroo logo" />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};
