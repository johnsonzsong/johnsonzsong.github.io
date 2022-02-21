import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import ProjectTile from "../components/projectTile";
import Footer from "../components/footer";
import grHifiStatic from "../../static/grHifiStatic.png";
import cartaFeature from "../../static/cartaFeature.png";
import cabanaFeature from "../../static/cabanaFeature.png";
import c3Logo from "../../static/c3Logo2.png";
import facebookLogo from "../../static/facebook.png";
import messengerLogo from "../../static/messenger.png";
import kangarooLogo from "../../static/kangaroo.jpeg";
import SiteNavigation from "../components/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
        <section className="col-70 card">
          <div className="card-content">
            <h1>Designer and developer</h1>
            <h3>Currently engineering features to power charitable giving and donations on Facebook.</h3>
            <br />
            <div className="socials-container">
              <a
                href="http://instagram.com/johnson.song"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/johnsonsong/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:johnsonsong@stanford.edu">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Projects */}
        <section className="col-60">
          <h2>Selected projects</h2>
          <ProjectTile
            route="/goodreads"
            imageSource={grHifiStatic}
            projectName="Goodreads"
            description="Redesigning social reading."
            role="Independent Project | March 2021"
            // timeFrame="March 2021"
            tags={['Mobile']}
          />
          <ProjectTile
            route="/carta"
            imageSource={cartaFeature}
            projectName="Carta"
            description="Designing the course search experience at Stanford."
            role="UX/UI Designer | Jan - June 2021"
            // timeFrame="January - June 2021"
            tags={['Desktop']}
          />
          <ProjectTile
            route="/daimler"
            imageSource={cabanaFeature}
            projectName="Daimler"
            description="Creating a gaming experience for autonomous driving."
            role="Capstone Project | Jan - June 2020"
            // timeFrame="January - June 2020"
            tags={['In-Vehicle System']}
          />
        </section>

        {/* Section 3: Other Companies */}
        <section className="col-60">
          <h2>Some other companies I've worked with</h2>
          <div className="card">
            <div className="other-companies-card-content">
              <img className="avatar" src={c3Logo} alt="c3 logo" />
              <img className="avatar" src={messengerLogo} alt="messenger logo" />
              <img className="avatar" src={facebookLogo} alt="facebook logo" />
              <img className="avatar" src={kangarooLogo} alt="kangaroo logo" />
            </div>
          </div>
        </section>

        <Footer />
      </div>

    </PageTransition>
  );
};
