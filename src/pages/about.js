import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import Footer from "../components/footer";
import ProjectTile from "../components/projectTile";
import SiteNavigation from "../components/nav";

import florence from "../../static/florence.jpg";
import michelangelo from "../../static/michelangelo.jpg";
import fiesole from "../../static/fiesole.jpg";
import vernazza from "../../static/vernazza.jpg";
import evreux from "../../static/evreux.jpeg";
import louvre from "../../static/louvre.jpg";
import gagliani from "../../static/gagliani.jpg";
import pfp from "../../static/pfp.jpeg";

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <script src={withPrefix("cursorScript.js")} type="text/javascript" />
        <script src={withPrefix("/app.js")} type="text/javascript" />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"
          integrity="sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </Helmet>
      <SEO title="About"></SEO>
      <div>

        <SiteNavigation />

        {/* CONTENT */}
        <div className="container">
          <section id="section-one" className="intro col-50">
            <h2> HI, I'M JOHNSON </h2>
            <div className="about-row">
              <div style={{ marginRight: "4em", flex: 2 }}>
                <p> I am a detail-oriented designer and developer.</p>
                <p className="mt-16">
                  Over the years, I’ve discovered a deep love for the design of
                  complex and crucial technologies. My background in computer
                  science and software engineering has given me invaluable
                  insights about how to be a better designer. My ability to
                  think creatively and critically, and to communicate
                  empathetically and technically is what sets me apart.
                </p>
                <p className="mt-16">
                  I was born in France and raised in Virginia. In 2016, I moved
                  to California to attend Stanford University. There, I was
                  introduced to computer science and UX/UI design. I was
                  immediately drawn to the intersection of technology, human
                  psychology, storytelling, and art.
                </p>
                <p className="mt-16">
                  I see design as a neverending journey to transform things that
                  don’t make sense into things that do.{" "}
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <div className="image-container nb">
                  <img style={{ width: "100%" }} src={pfp}></img>
                </div>
              </div>
            </div>
          </section>

          <section
            id="section-two"
            className="col-80"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>SOME OF MY FAVORITE PLACES</h2>
            <div className="project-row">
              <ProjectTile
                imageSource={florence}
                disabledLink
                projectName="Florence"
                description="Where I studied abroad for 3 months."
              />
              <ProjectTile
                imageSource={michelangelo}
                disabledLink
                projectName="Piazzale Michelangelo"
                description="Part of my daily walk to school in Florence."
              />
              <ProjectTile
                imageSource={vernazza}
                disabledLink
                projectName="Vernazza"
                description="Where I celebrated my 20th birthday with new friends."
              />
              <ProjectTile
                imageSource={fiesole}
                disabledLink
                projectName="Fiesole"
                description="(+ Alcedo for delicious pastries)."
              />
            </div>
            <div className="project-row">
              <ProjectTile
                imageSource={evreux}
                disabledLink
                projectName="Evreux"
                description="Where I was born and raised (for 5 years)."
              />
              <ProjectTile
                imageSource={louvre}
                disabledLink
                projectName="The Louvre"
                description="The Winged Victory of Samothrace in the Louvre."
              />
              <ProjectTile
                imageSource={gagliani}
                disabledLink
                projectName="Libraire Gagliani"
                description="A bookstore in Paris."
              />
            </div>
          </section>

          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          </div> */}

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
      <Footer />
    </PageTransition>
  );
};