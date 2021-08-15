import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix, Link } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';
import avatar from "../../static/avatar.png";
import grCover from "../../static/grCover.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import resume from "../../static/Johnson_Song_Resume.pdf";
import SEO from "../components/seo"
import cartaHifi from "../../static/cartaHifi.png";

const Home = () => {
  return (
    <PageTransition>
    <SEO title="Home"></SEO>
    <div>
      <Helmet>
        <script src={withPrefix('navScript.js')} type="text/javascript"/>
        <script src={withPrefix('cursorScript.js')} type="text/javascript"/>
      </Helmet>
      {/* NAV */}
      <div id="nav-container">
        <Link to="/"><div>WORK</div></Link>
        <Link to="/"><div>ABOUT</div></Link>
        <Link to="/"><div>RESUME</div></Link>
      </div>

      {/* SOCIAL */}
      <div id="social-container">
        <a href="http://instagram.com/johnson.song" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/johnsonsong/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:johnsonsong@stanford.edu">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {/* BACK TO TOP */}
      <a id="backToTop-container" onClick={() => {window.scrollTo(0, 0)}}>
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </a>

      {/* CONTENT */}
      <div className="container">
        <section id="section-one" className="intro col-80">
          <div className="avatar-container">
            <img className="avatar" src={avatar} />
          </div>
          <div>
            <h1> JOHNSON SONG </h1>
            <p> product design intern @C3.ai </p>
            <p> m.s. + b.s. computer science - hci @Stanford </p>
            <p> previously swe intern @Facebook </p>
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
                <p className="m-0 fs-med">
                  <b>C3.ai</b>
                </p>
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
                <p className="m-0 fs-med">
                  <b>Goodreads</b>
                </p>
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
                <p className="m-0 fs-med">
                  <b>Carta</b>
                </p>
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
                <p className="m-0 fs-med">
                  <b>Daimler</b>
                </p>
                <p className="m-0 a-60">Partner Designer and Developer | January - June 2020</p>
                <p>
                Designing, and developing an in-vehicle gaming experience for autonomous driving.                </p>
                <Link to="carta">
                  <div className="project-link">
                    Read more about Daimler &#10230;
                  </div>
                </Link>
              </div>
            </div>

          </section>

          <section id="section-three">
            <h2> Education. </h2>
            <div className="project">
              <div className="col-70">
                <p className="m-0 fs-med"><b>Stanford University</b></p>
                <p className="m-0">M.S. Computer Science</p>
                <p className="m-0">
                  Human Computer Interaction Concentration
                </p>
                <p className="m-0"><i>GPA: 4.0/4.0</i></p>

                <p>
                  Select Coursework: Product Management, HCI Research, Entrepreneurial Principles, Data Visualization, Social Computing, Web Applications
                </p>
              </div>
            </div>

            <div className="project">
              <div className="col-70">
                <p className="m-0 fs-med"><b>Stanford University</b></p>
                <p className="m-0">B.S. Computer Science</p>
                <p className="m-0">Minor in Economics</p>
                <p className="m-0"><i>GPA: 3.9/4.0</i></p>
                <p>
                  Select Coursework: Computer Systems, Artificial Intelligence, Human-Computer Interaction Design Studio, Product Design and Manufacturing, Design Sketching
                </p>
              </div>
            </div>
          </section>

          <section id="section-four">
            <h2>Favorites.</h2>
            <div className="project">
              <div className="col-70">
                <p className="m-0"><b>Hikes</b></p>
                <p className="m-0">
                  Upper Yosemite Falls - Yosemite National Park
                </p>
                <p className="m-0">Samaria Gorge - Crete</p>
                <p className="m-0">
                  Boy Scout Trail - Joshua Tree National Park
                </p>
              </div>
            </div>
            <div className="project">
              <div className="col-70">
                <p className="m-0"><b>Books</b></p>
                <p className="m-0">
                  Le Petit Prince - Antoine de Saint-Exupery
                </p>
                <p className="m-0">
                  Circe - Madeline Miller
                </p>
                <p className="m-0">
                  This is Water - David Foster Wallace
                </p>
              </div>
            </div>
          </section>

          <section id="section-five">
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
          </section>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}

export default Home;