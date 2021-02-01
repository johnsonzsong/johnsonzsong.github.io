import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import Grid from '@material-ui/core/Grid';
import { Link } from "gatsby";

const Home = () => {
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Johnson Song | Home</title>
      </Helmet>
      <div className="container">
        <div className="col-60">
          <section id="intro">
            <h2> Hey! I'm Johnson. </h2>
            <p>
              I’m a developer and designer, eager to explore the world and ready for my next project. I approach all my work with curiousity, creativity, and a keen eye for detail.
            </p>
            <p>
              I am a master’s student in computer science at Stanford. I am currently doing product design with the CartaLab at Stanford, helping students navigate their academic paths. Previously, I was a software engineering intern at Facebook Gaming and Messenger, where I developed new features for web and iOS.
            </p>
          </section>
          <section id="professional">
            <h2> Professional Experiences. </h2>
            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Product Designer</b></p>
                <p className="no-margin">CartaLab (Stanford University)</p>
                <p className="no-margin"><i>January 2021 - now</i></p>
                <p>
                  I joined the CartaLab team at Stanford to design a delightful way to search, filter, and sort through the thousands of courses offered at Stanford. I thoroughly enjoyed working with fellow designers in a beautiful design system and relevant application.
                </p>
              </div>
              <div className="col-50 project-button-container">
                <button className="project-button">More about CartaLab</button>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Engineering Lead</b></p>
                <p className="no-margin">Stealth Startup</p>
                <p className="no-margin"><i>September 2020 - now</i></p>
                <p>
                  I led the engineering team at a stealth startup in the interactive media space. I developed dozens of MVP features for web and mobile, scoped tasks, designed some flows, and helped form the early company product vision.
                </p>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Software Engineering Intern</b></p>
                <p className="no-margin">Facebook (Seattle)</p>
                <p className="no-margin"><i>June - September 2020</i></p>
                <p>
                I developed a brand new MVP experience for Facebook Gaming on web. I worked closely with designers and engineers across teams.
                </p>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Designer and Developer</b></p>
                <p className="no-margin">Daimler (Sunnyvale)</p>
                <p className="no-margin"><i>January - June 2020</i></p>
                <p>
                  I led research, prototyping, and user testing for an in-vehicle gaming experience for the autonomous driving era. I also helped program the MVP.
                </p>
              </div>
              <div className="col-50 project-button-container">
                <button className="project-button">More about Daimler</button>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Software Engineering Intern</b></p>
                <p className="no-margin">Facebook (Menlo Park)</p>
                <p className="no-margin"><i>June - September 2019</i></p>
                <p>
                  I developed new iOS features and ran user tests on Messenger, collaborating closely with designers, engineers, and data scientists. I also sought mentorship from incredible designers on the team.
                </p>
              </div>
            </div>
            
          </section>

          <section>
            <h2> Education. </h2>
            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Stanford University</b></p>
                <p className="no-margin">M.S. Computer Science</p>
                <p className="no-margin">
                  Human Computer Interaction Concentration
                </p>
                <p className="no-margin"><i>GPA: 4.0/4.0</i></p>

                <p>
                  Select Coursework: Product Management, Entrepreneurial Principles, Data Visualization, Social Computing, Web Applications
                </p>
              </div>
            </div>

            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Stanford University</b></p>
                <p className="no-margin">B.S. Computer Science</p>
                <p className="no-margin">Minor in Economics</p>
                <p className="no-margin"><i>GPA: 3.9/4.0</i></p>
                <p>
                  Select Coursework: Computer Systems, Artificial Intelligence, Human-Computer Interaction Design Studio, Product Design and Manufacturing, Design Sketching
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>Favorites.</h2>
            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Hikes</b></p>
                <p className="no-margin">
                  Upper Yosemite Falls - Yosemite National Park
                </p>
                <p className="no-margin">Samaria Gorge - Crete</p>
                <p className="no-margin">
                  Boy Scout Trail - Joshua Tree National Park
                </p>
              </div>
            </div>
            <div className="project">
              <div className="col-50">
                <p className="no-margin"><b>Books</b></p>
                <p className="no-margin">
                  Le Petit Prince - Antoine de Saint-Exupery
                </p>
                <p className="no-margin">
                  The Prophets - Robert Jones, Jr.
                </p>
                <p className="no-margin">
                  This is Water - David Foster Wallace
                </p>
              </div>
            </div>
          </section>
        </div>
        


      </div>
    </div>
  );
}

export default Home;