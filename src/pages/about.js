import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';
import avatar from "../../static/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import SEO from "../components/seo"
import SiteNavigation from '../components/nav';

const About = () => {
  return (
    <PageTransition>
      <SEO title="About"></SEO>
      <div>
        <Helmet>
          <script src={withPrefix('cursorScript.js')} type="text/javascript" />
        </Helmet>

        <SiteNavigation />

        {/* BACK TO TOP */}
        <a id="backToTop-container" onClick={() => { window.scrollTo(0, 0) }}>
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </a>

        {/* CONTENT */}
        <div className="container">
          <section id="section-one" className="intro">
            <div className="avatar-container">
              <img className="avatar" src={avatar} />
            </div>
            <div>
              <h1> HI, I'M JOHNSON </h1>
              <p> I am a detail-oriented designer and developer. This entire website was designed in Figma and developed in React, from scratch, by me!
              </p>
              <p className="mt-16">
                Over the years, I’ve discovered a deep love for the design of complex and crucial technologies. I believe that my background in computer science and software engineering has given me invaluable insights about how to be a better designer. My ability to think creatively and critically, and to communicate empathetically and technically is what sets me apart.
              </p>
              <p className="mt-16">
                My story begins in Normandy, France, where I was born (along with my twin sister). After 5 years, my family moved to McLean, Virginia. After 13 years on the East Coast, I moved to California to attend Stanford University. College was my introduction to computer science, through which I learned about UX/UI design. I was immediately drawn to this intersection of technology, human psychology, storytelling, and art.
              </p>
              <p className="mt-16">
                I see design as a neverending journey to transform things that don’t make sense into things that do. </p>
            </div>
          </section>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <section className="mr-64">
              <h2> FAVORITE PLACES </h2>
              <p>
                <b> Florence, Italy </b> - where I studied abroad for 3 months.
              </p>
              <p>
                <b> Paris, France </b> - an hour from where I was born.
              </p>
              <p>
                <b> Stanford, CA </b> - where I learned cool things and made best friends.
              </p>
            </section>
            <section>
              <h2> FAVORITE BOOKS </h2>
              <p> <b> Circe </b> by Madeline Miller</p>
              <p> <b> Le Petit Prince </b> by Antoine de Saint-Exupery</p>
              <p> <b> This is Water </b> by David Foster Wallace</p>
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

export default About;