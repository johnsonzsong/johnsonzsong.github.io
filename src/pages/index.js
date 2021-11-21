import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';
import SEO from "../components/seo";
import ProjectTile from '../components/projectTile';
import Footer from "../components/footer";
import c3Logo from "../../static/c3Logo.png";
import grLogo from "../../static/grLogo.png";
import cartaLogo from "../../static/cartaLogo.svg";
import daimlerLogo from "../../static/daimlerLogo.png";
import SiteNavigation from '../components/nav';
import { BsArrowDown } from 'react-icons/bs';

const Home = () => {
  return (
    <PageTransition>
      <SEO title="Home"></SEO>
      <div style={{ overflowX: "hidden" }}>
        <Helmet>
          <script src={withPrefix('cursorScript.js')} type="text/javascript" />
          <script src={withPrefix('app.js')} type="text/javascript" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" integrity="sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </Helmet>

        <SiteNavigation />

        {/* BACK TO TOP */}
        {/* <a id="backToTop-container" onClick={() => { window.scrollTo(0, 0) }}>
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </a> */}

        <div className="testSection">
          <div className="hero">
            <img className="mountain" src="mountain.jpeg" alt="mountain" />

            <div className="headline">
              This is my <br />
              <span className="portfolio">
                PORTFOLIO.
              </span>
              <span className="portfolio">
                PLAYGROUND.
              </span>
              <span className="portfolio">
                PASSION.
              </span>
            </div>

          </div>

        </div>

        <div className="col-80" style={{ height: "15vh", display: "flex", flexDirection: "column", alignItems: "center", margin: "auto", textAlign: "center" }}>
          <h3> Everything you see on this website was designed and coded from scratch by me using Figma, React, JavaScript, HTML/CSS, and GSAP. </h3>
          <div className="arrowContainer">
            <BsArrowDown size={32} className="arrow" />
          </div>
        </div>

        {/* <div className="slider"></div> */}

        <div className="container col-80">
          {/* <section className="intro">
            <div>
              <h1> JOHNSON SONG </h1>
              <p> M.S. Computer Science - HCI <a href="https://www.stanford.edu/" target="_blank"> @Stanford </a> </p>
              <p> B.S. Computer Science <a href="https://www.stanford.edu/" target="_blank"> @Stanford </a> </p>
              <p> Previously Product Design intern <a href="https://c3.ai/" target="_blank"> @C3.ai </a> </p>
              <p> Previously SWE intern <a href="https://www.meta.com/" target="_blank"> @Facebook </a> </p>
            </div>
          </section> */}

          <section id="section-two" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2>SOME THINGS I'VE DESIGNED...</h2>
            <div className="project-row">
              <ProjectTile
                imageSource={c3Logo}
                disabledLink
                projectName="C3"
                description="Designing enterprise AI products for customer relationship management, reliability, and data."
                role="Product Design Intern"
                timeFrame="June - August 2021"
              />
              <ProjectTile
                route="/goodreads"
                imageSource={grLogo}
                projectName="Goodreads"
                description="Redesigning the world’s largest site for readers and book recommendations."
                role="Independent Project"
                timeFrame="March 2021"
              />
              <ProjectTile
                route="/carta" imageSource={cartaLogo}
                projectName="Carta"
                description="Designing the course search experience at Stanford University."
                role="UX/UI Designer"
                timeFrame="January - June 2021"
              />
              <ProjectTile
                route="/daimler"
                imageSource={daimlerLogo}
                projectName="Daimler"
                description="Designing and developing an in-vehicle gaming experience for autonomous driving."
                role="Partner Designer and Developer"
                timeFrame="January - June 2020"
              />
            </div>
          </section>

          <section style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "8em" }}>
            <h2>...AND SOME THINGS I'VE DEVELOPED</h2>
            <div className="col-50" style={{ display: "flex", justifyContent: "space-around" }}>
              <img className="avatar" src="messenger.png" />
              <img className="avatar" src="facebook.png" />
              <img className="avatar" src="kangaroo.jpeg" />
            </div>
          </section>

          {/* <section>
              <h2> EDUCATION </h2>
              <p className="m-0 fs-med">
                <b>Stanford University</b>
              </p>
              <p className="m-0 a-60">September 2020 - December 2021</p>
              <p>
                M.S. Computer Science - HCI <br />
                4.0/4.0 GPA
              </p>

              <p className="fs-med mt-32">
                <b>Stanford University</b>
              </p>
              <p className="m-0 a-60">September 2016 - June 2020</p>
              <p>
                B.S. Computer Science - HCI <br />
                Minor in Economics <br />
                3.9/4.0 GPA
              </p>
            </section> */}
        </div>
      </div>
      <Footer />
    </PageTransition >
  );
}

export default Home;