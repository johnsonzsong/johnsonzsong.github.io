import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';
import avatar from "../../static/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import SEO from "../components/seo"
import SiteNavigation from '../components/nav';
import resume from "../../static/Johnson_Song_Resume.pdf";

const Resume = () => {
  return (
    <PageTransition>
    <SEO title="Resume"></SEO>
    <div>
      <Helmet>
        <script src={withPrefix('cursorScript.js')} type="text/javascript"/>
      </Helmet>

      <SiteNavigation />

      {/* BACK TO TOP */}
      <a id="backToTop-container" onClick={() => {window.scrollTo(0, 0)}}>
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </a>

      {/* CONTENT */}
      <div className="container">
          <div 
            className="mb-64"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
              <h2>RESUME</h2>
              <a href={resume} target="_blank">Download </a>
          </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <section className="intro mr-64">
          <div className="avatar-container">
            <img className="avatar" src={avatar} />
          </div>
          <div>
            <h1> JOHNSON SONG </h1>
            <p> johnsonsong@stanford.edu</p>
            <p> (703) 459 - 8226</p>
            <Link to="https://www.linkedin.com/in/johnsonsong/">linkedin.com/in/johnsonsong</Link>
            <br/>
            <Link to="https://johnsonsong.me/">johnsonsong.me</Link>
          </div>
        </section>

        <section>
            <section>
        <h2 className="mt-0"> WORK EXPERIENCE </h2>
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

                <div className="row mt-32">
                  <p className="fs-med">
                    <b>Carta</b>
                  </p>
                  <div className="pill-pd">PRODUCT DESIGN</div>
                </div>
                <p className="m-0 a-60">UX/UI Designer | January - June 2021</p>
                <p>
                Designing the course search experience at Stanford University.
                </p>
                
            <div className="row mt-32">
                  <p className="fs-med">
                    <b>Kangaroo</b>
                  </p>
                  <div className="pill-pd">PRODUCT DESIGN</div>
                  <div className="pill-engineering">ENGINEERING</div>
                </div>
                <p className="m-0 a-60">Head of Engineering | September 2020 - May 2021</p>
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
                </section>

                <section>
                <h2 className="mt-0"> EDUCATION </h2>
                <p className="m-0 fs-med">
                    <b>Stanford University</b>
                  </p>
                <p className="m-0 a-60">September 2020 - December 2021</p>
                <p>
                M.S. Computer Science - HCI <br/>
4.0/4.0 GPA       
                </p>

                <p className="fs-med mt-32">
                    <b>Stanford University</b>
                  </p>
                <p className="m-0 a-60">September 2016 - June 2020</p>
                <p>
                B.S. Computer Science - HCI <br/>
Minor in Economics <br/>
3.9/4.0 GPA       
                </p>
                </section>

                <section>
                <h2 className="mt-0"> SKILLS </h2>
                <p className="m-0 fs-med">
                    <b>Design</b>
                </p>
                <p>
                Needfinding, design thinking, prototyping, wireframing, design systems, journey mapping, information architecture, data visualization, Figma
                </p>
                <p className="mt-32 fs-med">
                    <b>Engineering</b>
                </p>
                <p>
                React, Javascript, Java, HTML, CSS, C++, Objective-C
                </p>
                </section>

                <section>
                <h2 className="mt-0"> LANGUAGES </h2>
                <p>English, Mandarin, French (intermediate), Italian (basic)</p>
                </section>
        </section>
        </div>
      </div>

    </div>
    </PageTransition>
  );
}

export default Resume;