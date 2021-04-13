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

const Home = () => {
  return (
    <PageTransition>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Johnson Song | Home</title>
        <script src={withPrefix('navScript.js')} type="text/javascript"/>
        <script src={withPrefix('cursorScript.js')} type="text/javascript"/>
      </Helmet>
      {/* NAV */}
      <div id="nav-container">
        <Link to="/">
          <div className="logo holo-text">JS.</div>
        </Link>
        <div className="nav-items">
          <div className="nav-bar"></div>
          <div className="nav-list">
            <p id="nav-one" className="nav-active" onClick={() => {
              var elmnt = document.getElementById("section-one");
              elmnt.scrollIntoView();
            }}>
              About.
            </p>
            <p id="nav-two" onClick={() => {
              var elmnt = document.getElementById("section-two");
              elmnt.scrollIntoView();
            }}>
              Professional Experience.
            </p>
            <p id="nav-three" onClick={() => {
              var elmnt = document.getElementById("section-three");
              elmnt.scrollIntoView();
            }}>
              Education.
            </p>
            <p id="nav-four" onClick={() => {
              var elmnt = document.getElementById("section-four");
              elmnt.scrollIntoView();
            }}>
              Favorites.
            </p>
            <p id="nav-five" onClick={() => {
              var elmnt = document.getElementById("section-five");
              elmnt.scrollIntoView();
            }}>
              Shoutouts.
            </p>
          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div id="social-container">
        <a href="http://instagram.com/johnson.song" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/johnsonsong/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:johnsonsong@stanford.edu">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>

      {/* BACK TO TOP */}
      <a id="backToTop-container" onClick={() => {window.scrollTo(0, 0)}}>
        <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
      </a>

      {/* CONTENT */}
      <div className="container">
        <p id="ps-container" class="holo-text">
          *P.S. - this entire website was designed (Figma) and developed (React/Javascript) from scratch by me!
        </p>
        <section id="section-one" className="intro">
          <div className="col-80">
            <h2 className="holo-text"> Hey! I'm Johnson. </h2>
            <p>
              I’m a developer and designer, eager to explore the world and ready for my next project. I approach all my work with curiosity, creativity, and a keen eye for detail.
            </p>
            <p>
              I am a master’s student in computer science at Stanford. I am currently doing product design with Carta at Stanford, helping students navigate their academic paths. Previously, I was a software engineering intern at <a href="https://www.facebook.com/gaming/" target="_blank">Facebook Gaming</a> and <a href="https://m.me/johnson.song.5" target="_blank">Messenger</a>, where I developed new features for web and iOS.
            </p>
            <a href={resume} target="_blank">
              <button className="project-button">Download my Resume</button>
            </a>
          </div>
          <div className="avatar-container">
            <img className="avatar" src={avatar} />
            <div className="avatar-ring" />
          </div>
        </section>
        <div className="col-80">
          <h2> Featured Project. </h2>
          <Link to="goodreads">
            <section>
              <img className="featured" src={grCover}></img>
            </section>
          </Link>

          <section id="section-two">
            <h2> Professional Experiences.</h2>
            <div className="project">
              <div className="col-50">
                <p className="m-0"><div className="current"></div><b>UX/UI Designer</b></p>
                <p className="m-0">Carta (Stanford University)</p>
                <p className="m-0"><i>January 2021 - now</i></p>
                <p>
                  I joined the Carta team at Stanford to design a delightful way to search, filter, and sort through the thousands of courses offered at Stanford. I thoroughly enjoyed working with fellow designers in a beautiful design system and relevant application.
                </p>
              </div>
              <div className="col-50 project-button-container">
                <Link to="carta">
                  <button className="project-button">More about Carta</button>
                </Link>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="m-0"><div className="current"></div><b>Head of Engineering</b></p>
                <p className="m-0">Stealth Startup</p>
                <p className="m-0"><i>September 2020 - now</i></p>
                <p>
                  I led the engineering team at a stealth startup in the interactive media space. I developed dozens of MVP features for web and mobile, scoped tasks, designed some flows, and helped form the early company product vision.
                </p>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="m-0"><b>Software Engineering Intern</b></p>
                <p className="m-0">Facebook (Seattle)</p>
                <p className="m-0"><i>June - September 2020</i></p>
                <p>
                I developed a brand new MVP experience for Facebook Gaming on web. I worked closely with designers and engineers across teams.
                </p>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="m-0"><b>Product Designer and Developer</b></p>
                <p className="m-0">Daimler (Sunnyvale)</p>
                <p className="m-0"><i>January - June 2020</i></p>
                <p>
                  I led research, prototyping, and user testing for an in-vehicle gaming experience for the autonomous driving era. I also helped develop the MVP.
                </p>
              </div>
              <div className="col-50 project-button-container">
                <Link to="daimler">
                  <button className="project-button">More about Daimler</button>
                </Link>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="m-0"><b>Software Engineering Intern</b></p>
                <p className="m-0">Facebook (Menlo Park)</p>
                <p className="m-0"><i>June - September 2019</i></p>
                <p>
                  I developed new iOS features and ran user tests on Messenger, collaborating closely with designers, engineers, and data scientists. I also sought mentorship from incredible designers on the team.
                </p>
              </div>
            </div>
            
          </section>

          <section id="section-three">
            <h2> Education. </h2>
            <div className="project">
              <div className="col-70">
                <p className="m-0"><b>Stanford University</b></p>
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
                <p className="m-0"><b>Stanford University</b></p>
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
                  I would not be where I am today without mentorship and support from so many people. Here are just some of them who’ve had a huge impact on my experiences and happiness.
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