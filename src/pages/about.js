import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import Footer from "../components/footer";
import SiteNavigation from "../components/nav";
import PlaceTile from "../components/placeTile";

import florence from "../../static/florence.jpg";
import michelangelo from "../../static/michelangelo.jpg";
import vernazza from "../../static/vernazza.jpg";
import evreux from "../../static/evreux.jpeg";
import louvre from "../../static/louvre.jpg";
import gagliani from "../../static/gagliani.jpg";

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <script src={withPrefix("cursorScript.js")} type="text/javascript" />
      </Helmet>
      <SEO title="About"></SEO>

      <SiteNavigation />

      <div className="container">
        <section className="col-70 about card">
          <div className="card-content">
            <h1> Hi, I'm Johnson</h1>

            <h4>The tl;dr</h4>
            <h3 className="mt-16">NYC-based designer and developer. Stanford grad (x2). Fitness fanatic. Nature lover. Campfire guitarist. Traveler. </h3>
            <br />
            <br />
            <h4>The longer version</h4>
            <p className="mt-16">
              I was born in France and raised in Virginia with my twin sister. In 2016, I moved
              to California to attend Stanford University. There, I was
              introduced to computer science and UX/UI design. I was
              instantly drawn to the unique intersection of technology, human
              psychology, storytelling, and art.
            </p>
            <p className="mt-16">
              Over the years, I’ve discovered a deep love for the design of
              complex and crucial technologies. My background in computer
              science and software engineering has given me invaluable
              insights about how to be a better designer. My ability to
              think creatively and critically, and to communicate
              empathetically and technically, are what set me apart.
            </p>

            <p className="mt-16">
              I see design as a never-ending journey to transform things that
              don’t make sense into things that do.{" "}
            </p>
          </div>
          {/* <div className="about-image-container">
            <img style={{ width: "100%" }} src={pfp}></img>
          </div> */}
        </section>

        <section className="col-60">
          <h2>Some of my favorite places</h2>
          <div className="places-row">
            <PlaceTile
              imageSource={florence}
              place="Florence, Italy"
              description="I studied abroad in Florence for 3 months as part of the Stanford Bing Overseas Studies Program."
            />
            <PlaceTile
              imageSource={michelangelo}
              place="Piazzale Michelangelo"
              description="I stopped by this hill almost every evening on my walk back from class, catching a panoramic view of the sunset over Florence."
            />
            <PlaceTile
              imageSource={vernazza}
              place="Cinque Terre"
              description="I spent a weekend in Cinque Terre towards the end of my quarter abroad, celebrating my 20th birthday with life-long friends."
            />
            <PlaceTile
              imageSource={evreux}
              place="Evreux, France"
              description="I was born and raised here, about an hour away from Paris."
            />
            <PlaceTile
              imageSource={louvre}
              place="Le Louvre, Paris"
              description="I spent a good half-day in the Louvre, particularly drawn to the Greek and Roman sculpture."
            />
            <PlaceTile
              imageSource={gagliani}
              place="Libraire Gagliani"
              description="A bookstore that I stumbled upon while exploring Paris on a wet spring day."
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
        <Footer />
      </div>

    </PageTransition>
  );
};