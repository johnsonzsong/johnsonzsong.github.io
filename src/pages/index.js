import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix, Link } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';
import avatar from "../../static/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import SEO from "../components/seo"
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
      <div>
        <Helmet>
          <script src={withPrefix('cursorScript.js')} type="text/javascript" />
          <script src={withPrefix('app.js')} type="text/javascript" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" integrity="sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </Helmet>

        <SiteNavigation />

        {/* SOCIAL */}
        {/* <div id="social-container">
        <a href="http://instagram.com/johnson.song" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/johnsonsong/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:johnsonsong@stanford.edu">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div> */}

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

        <div style={{ height: "15vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h3> Everything you see on this website was designed and coded from scratch by me using Figma, React, JavaScript, HTML/CSS, and GSAP. </h3>
          <BsArrowDown size={32} className="arrow" />
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
            <div className="project-row">
              <div className="project coming-soon">
                <div className="col-50 mr-32">
                  <div className="image-container nb">
                    <img style={{ width: "100%" }} src={c3Logo}></img>
                  </div>
                </div>
                <div style={{ width: "100%" }}>
                  <div className="row">
                    <p className="m-0 fs-med">
                      <b>C3.ai</b>
                    </p>
                    <div className="pill-pd">PRODUCT DESIGN</div>
                  </div>
                  <p className="m-0 a-60">Product Design Intern | June - August 2021</p>
                  <p>
                    Designing enterprise AI products for customer relationship management, reliability, and data.
                  </p>
                  <br />
                  <br />
                  <a href="mailto:johnsonsong@stanford.edu" className="project-link">
                    Contact me directly about this project.
                  </a>
                </div>
              </div>

              <div className="project">
                <div className="col-50 mr-32">
                  <Link to="goodreads">
                    <div className="image-container nb">
                      <img style={{ width: "100%" }} src={grLogo}></img>
                    </div>
                  </Link>
                </div>
                <div style={{ width: "100%" }}>
                  <div className="row">
                    <p className="m-0 fs-med">
                      <b>Goodreads</b>
                    </p>
                    <div className="pill-pd">PRODUCT DESIGN</div>
                  </div>
                  <p className="m-0 a-60">Independent Project | March 2021</p>
                  <p>
                    Redesigning the world’s largest site for readers and book recommendations.
                  </p>
                  <Link to="goodreads">
                    <div className="project-link">
                      Read more about Goodreads &#10230;
                    </div>
                  </Link>
                </div>
              </div>
              <div className="project">
                <div className="col-50 mr-32">
                  <Link to="carta">
                    <div className="image-container nb">
                      <img style={{ width: "100%" }} src={cartaLogo}></img>
                    </div>
                  </Link>
                </div>
                <div style={{ width: "100%" }}>
                  <div className="row">
                    <p className="m-0 fs-med">
                      <b>Carta</b>
                    </p>
                    <div className="pill-pd">PRODUCT DESIGN</div>
                  </div>
                  <p className="m-0 a-60">UX/UI Designer | January - June 2021</p>
                  <p>
                    Designing the course search experience at Stanford University.
                  </p>
                  <Link to="carta">
                    <div className="project-link">
                      Read more about Carta &#10230;
                    </div>
                  </Link>
                </div>
              </div>

              <div className="project coming-soon">
                <div className="col-50 mr-32">
                  <Link to="daimler">
                    <div className="image-container nb">
                      <img style={{ width: "100%" }} src={daimlerLogo}></img>
                    </div>
                  </Link>
                </div>
                <div style={{ width: "100%" }}>
                  <div className="row">
                    <p className="m-0 fs-med">
                      <b>Daimler</b>
                    </p>
                    <div className="pill-pd">PRODUCT DESIGN</div>
                    <div className="pill-engineering">ENGINEERING</div>
                  </div>
                  <p className="m-0 a-60">Partner Designer and Developer | January - June 2020</p>
                  <p>
                    Designing and developing an in-vehicle gaming experience for autonomous driving.
                  </p>
                  <Link to="daimler">
                    <div className="project-link">
                      Read more about Daimler &#10230;
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-25" style={{ display: "flex", justifyContent: "space-around" }}>
              <img className="avatar" src="messenger.png" />
              <img className="avatar" src="facebook.png" />
              <img className="avatar" src="kangaroo.jpeg" />
            </div>
          </section>

          {/*  <div className="col-35" style={{ display: "flex", justifyContent: "space-around" }}>
            <section className="mr-64">
              <h2> OTHER EXPERIENCE </h2>
              <div className="row">
                <p className="m-0 fs-med">
                  <b>Kangaroo</b>
                </p>
                <div className="pill-pd">PRODUCT DESIGN</div>
                <div className="pill-engineering">ENGINEERING</div>
              </div>
              <p className="m-0 a-60">Founding Head of Engineering | September 2020 - May 2021</p>
              <p>
                Designing and developing MVP features for a stealth startup in the creator-social space.
              </p>

              <div className="row mt-32">
                <p className="fs-med">
                  <b>Facebook</b>
                </p>
                <div className="pill-engineering">ENGINEERING</div>
              </div>
              <p className="m-0 a-60">Software Engineering Intern | June - August 2020</p>
              <p>
                Developing MVP features for Facebook Gaming on web.
              </p>

              <div className="row mt-32">
                <p className="fs-med">
                  <b>Facebook</b>
                </p>
                <div className="pill-engineering">ENGINEERING</div>
              </div>
              <p className="m-0 a-60">Software Engineering Intern | June - August 2019</p>
              <p>
                Developing new iOS features for Messenger.
              </p>
            </section> */}

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
    </PageTransition >
  );
}

export default Home;