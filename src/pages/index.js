import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix, Link } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';
import avatar from "../../static/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import resume from "../../static/Johnson_Song_Resume.pdf";
import SEO from "../components/seo"
import cartaHifi from "../../static/cartaHifi.png";
import SiteNavigation from '../components/nav';

const Home = () => {
  return (
    <PageTransition>
    <SEO title="Home"></SEO>
    <div>
      <Helmet>
        <script src={withPrefix('cursorScript.js')} type="text/javascript"/>
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
      <a id="backToTop-container" onClick={() => {window.scrollTo(0, 0)}}>
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </a>

      {/* CONTENT */}
      <div className="container">
        <section id="section-one" className="intro">
          <div className="avatar-container">
            <img className="avatar" src={avatar} />
          </div>
          <div>
            <h1> JOHNSON SONG </h1>
            <p> Product design intern @C3.ai </p>
            <p> M.S. + B.S. Computer Science - HCI @Stanford </p>
            <p> Previously SWE intern @Facebook </p>
            {/* <a href={resume} target="_blank">
              <button className="project-button">Download my Resume</button>
            </a> */}
          </div>
        </section>
        <div className="col-80">
          <section id="section-two">
            <h2> WORK </h2>
            <div className="project">
            <div className="col-35 mr-32">
                <Link to="carta">
                  <div className="image-container nb">
                    <img style={{width: "100%"}} src={cartaHifi}></img>
                  </div>
                </Link>
              </div>
              <div style={{width: "100%"}}>
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
                <Link to="carta">
                  <div className="project-link">
                    Read more about C3.ai &#10230;
                  </div>
                </Link>
              </div>
            </div>

            <div className="project">
            <div className="col-35 mr-32">
                <Link to="carta">
                  <div className="image-container nb">
                    <img style={{width: "100%"}} src={cartaHifi}></img>
                  </div>
                </Link>
              </div>
              <div style={{width: "100%"}}>
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
                <Link to="carta">
                  <div className="project-link">
                    Read more about Goodreads &#10230;
                  </div>
                </Link>
              </div>
            </div>

            <div className="project">
            <div className="col-35 mr-32">
                <Link to="carta">
                  <div className="image-container nb">
                    <img style={{width: "100%"}} src={cartaHifi}></img>
                  </div>
                </Link>
              </div>
              <div style={{width: "100%"}}>
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

            <div className="project">
            <div className="col-35 mr-32">
                <Link to="carta">
                  <div className="image-container nb">
                    <img style={{width: "100%"}} src={cartaHifi}></img>
                  </div>
                </Link>
              </div>
              <div style={{width: "100%"}}>
              <div className="row">
                  <p className="m-0 fs-med">
                    <b>Daimler</b>
                  </p>
                  <div className="pill-pd">PRODUCT DESIGN</div>
                  <div className="pill-engineering">ENGINEERING</div>
                </div>
                <p className="m-0 a-60">Partner Designer and Developer | January - June 2020</p>
                <p>
                Designing, and developing an in-vehicle gaming experience for autonomous driving.               
                </p>
                <Link to="carta">
                  <div className="project-link">
                    Read more about Daimler &#10230;
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div style={{display: "flex", justifyContent: "space-between"}}>
          <section id="section-three" className="col-50 mr-64">
            <h2> OTHER EXPERIENCE </h2>
            <div className="row">
                  <p className="m-0 fs-med">
                    <b>Kangaroo</b>
                  </p>
                  <div className="pill-pd">PRODUCT DESIGN</div>
                  <div className="pill-engineering">ENGINEERING</div>
                </div>
                <p className="m-0 a-60">Head of Engineering | September 2020 - May 2021</p>
                <p>
                Designing and developing MVP features for a stealth startup in the creator-social space.           
                </p>

                <div className="row">
                <p className="fs-med mt-32">
                    <b>Facebook</b>
                  </p>
                  <div className="pill-engineering">ENGINEERING</div>
                </div>
                <p className="m-0 a-60">Software Engineering Intern | June - August 2020</p>
                <p>
                Developing MVP features for Facebook Gaming on web.        
                </p>

                <div className="row">
                <p className="fs-med mt-32">
                    <b>Facebook</b>
                  </p>
                  <div className="pill-engineering">ENGINEERING</div>
                </div>
                <p className="m-0 a-60">Software Engineering Intern | June - August 2019</p>
                <p>
                Developing new iOS features for Messenger.      
                </p>
          </section>

          <section id="section-three" className="col-50">
            <h2> EDUCATION </h2>
                  <p className="m-0 fs-med">
                    <b>Stanford University</b>
                  </p>
                <p className="m-0 a-60">September 2020 - December 2021</p>
                <p>
                M.S. Computer Science - HCI Specialization <br/>
4.0/4.0 GPA       
                </p>

                <p className="fs-med mt-32">
                    <b>Stanford University</b>
                  </p>
                <p className="m-0 a-60">September 2016 - June 2020</p>
                <p>
                B.S. Computer Science - HCI Specialization <br/>
Minor in Economics <br/>
3.9/4.0 GPA       
                </p>
          </section>
          </div>
          

          {/* <section id="section-five">
            <h2>Shoutouts.</h2>
            <div className="project">
              <div className="col-70">
                <p>
                  I would not be where I am today without mentorship and support from so many people. Here are just some of them who’ve had a huge impact on me.
                </p>
                <p className="m-0">
                  <a href="https://www.linkedin.com/in/jennifersongcmu" target="_blank">
                    Jennifer Song
                  </a>
                </p>
                <p className="m-0">Rıza Selçuk Saydam</p>
                <p className="m-0">Jordan Dunn</p>
                <p className="m-0">
                  <a href="http://www.kristinainouye.com/" target="_blank">
                    Kristina Inouye
                  </a>
                </p>
                <p className="m-0">
                  <a href="https://www.liamllorin.com/" target="_blank">
                    Liam Llorin
                  </a>
                </p>
                <p className="m-0">Jordan Llorin</p>
                <p className="m-0">
                  <a href="https://www.sophia-nguyen.com/" target="_blank">
                    Sophia Nguyen
                  </a>
                </p>
                <p className="m-0">Kaelyn Ong</p>
                <p className="m-0">Noopur Chhabra</p>   
                <p className="m-0">Odette Du</p>
                <p className="m-0">Daiwei Liu</p>
                <p className="m-0">Roger Li</p>
                <p className="m-0">Seth Kasky</p>        
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;