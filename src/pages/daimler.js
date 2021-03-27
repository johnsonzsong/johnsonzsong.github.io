import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import neil from "../../static/neil.png";
import alex from "../../static/alex.png";
import cabanaBrainstorm1 from "../../static/cabanaBrainstorm1.png";
import cabanaBrainstorm2 from "../../static/cabanaBrainstorm2.png";
import cabanaPrototype2 from "../../static/cabanaPrototype2.png";
import cabanaMedFi1 from "../../static/cabanaMedFi1.png";
import cabanaMedFi2 from "../../static/cabanaMedFi2.png";
import cabanaMedFi3 from "../../static/cabanaMedFi3.png";
import cabanaFeature from "../../static/cabanaFeature.png";
import PageTransition from 'gatsby-plugin-page-transitions';

const Daimler = () => {
  return (
    <PageTransition>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Johnson Song | Daimler</title>
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
              Background.
            </p>
            <p id="nav-two" onClick={() => {
              var elmnt = document.getElementById("section-two");
              elmnt.scrollIntoView();
            }}>
              User Research.
            </p>
            <p id="nav-three" onClick={() => {
              var elmnt = document.getElementById("section-three");
              elmnt.scrollIntoView();
            }}>
              Rapid Prototypes.
            </p>
            <p id="nav-four" onClick={() => {
              var elmnt = document.getElementById("section-four");
              elmnt.scrollIntoView();
            }}>
              Med-Fi.
            </p>
            <p id="nav-five" onClick={() => {
              var elmnt = document.getElementById("section-five");
              elmnt.scrollIntoView();
            }}>
              Hi-Fi and MVP.
            </p>
          </div>
        </div>
      </div>

      <a id="backToTop-container" onClick={() => {window.scrollTo(0, 0)}}>
        <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
      </a>

      <div className="container">
        <div className="col-60">
          <section id="section-one">
            <h1> Daimler. </h1>
            <p>
              The Mercedes-Benz Research and Development North America (MBRDNA), located in Sunnyvale, CA, is Daimler AG’s hub of cutting-edge technology and groundbreaking innovation. Researchers here focus on creating the next generations of connected, autonomous, electric vehicles (EVs) and the ecosystems enabling them. Read more about MBRDNA <a href="https://www.daimler.com/company/north-america/mercedes-benz-r-d.html" target="_blank">here.</a>
            </p>
            <div className="mt-64">
              <h2>Background.</h2>
              <p>
                As part of a senior capstone project course at Stanford, my team and I partnered with Daimler to create a multiplayer touchscreen game for the Mercedes-Benz Head Unit. Our liaisons at Daimler were interested in uncovering insights about in-vehicle entertainment in the autonomous driving era.
              </p>
              <div className="background-facts">
                <div> 
                  <p>DURATION</p>
                  <p>January - June 2020</p>
                </div>
                <div> 
                  <p>ROLES</p>
                  <p className="m-0">Product Designer</p>
                  <p className="m-0">Frontend Developer</p>
                </div>
                <div> 
                  <p>TOOLS</p>
                  <p className="m-0">Figma</p>
                  <p className="m-0">React</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <section id="section-two" className="wide">
          <div className="col-70 multi-image">
            <div className="persona-container">
              {/* TOP */}
              <div className="persona-top">
                <img className="persona-image" src={neil}></img>
                <div>
                  <h2 className="m-0">Neil</h2>
                  <p className="m-0">
                    Neil is a 32 year old engineer living in Hawaii. He is married and has no children.
                  </p>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="persona-bottom">
                <div className="persona-timeline">
                  <div className="persona-line"></div>
                  <div className="persona-dot"></div>
                  <div className="persona-dot"></div>
                  <div className="persona-dot"></div>
                </div>
                <div className="persona-findings-container">
                  <p className="persona-finding">
                    Charges 5 times a week in order to reserve the Electric Vehicle parking spaces at his condo
                  </p>
                  <p className="persona-finding">
                    “Tesla Caraoke is too distracting and shouldn’t be allowed”
                  </p>
                  <p className="persona-finding">
                    Never plays games while charging, since he’s running errands
                  </p>
                </div>
              </div>
            </div>

            <div className="persona-container">
              {/* TOP */}
              <div className="persona-top">
                <img className="persona-image" src={alex}></img>
                <div>
                  <h2 className="m-0">Alex</h2>
                  <p className="m-0">
                    Alex is a 46 year old professor living in Palo Alto. He has 2 children.
                  </p>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="persona-bottom">
                <div className="persona-timeline">
                  <div className="persona-line"></div>
                  <div className="persona-dot"></div>
                  <div className="persona-dot"></div>
                  <div className="persona-dot"></div>
                </div>
                <div className="persona-findings-container">
                  <p className="persona-finding">
                    Has only played in-vehicle games once to show children.
                  </p>
                  <p className="persona-finding">
                    His children have also only tried in-car games once, quickly deferring to other forms of entertainment (smart phones, TV, etc.)
                  </p>
                  <p className="persona-finding">
                    Prioritizes productivity when charging
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-25">
            <h2>User Research.</h2>
            <p>
              As autonomy and electric vehicle charging become more established in the automotive industry, drivers will have an increasing opportunity to engage with in-vehicle entertainment.
            </p>
            <p>
              My team conducted user studies by observing and interviewing Tesla owners at Supercharger stations. We sought a better understanding of how owners of autonomous and electric vehicles interacted with and within their cars. We also took a trip to the nearby Palo Alto Tesla dealership to learn more about the current status of in-car entertainment technology. Here are two user personas to represent the aggregate profile of over 50 total user interviews.
            </p>
          </div>
        </section>
        
        <section id="user-insights" className="wide stack">
          <h2>User Insights.</h2>
          <p className="col-60 mb-32">
            Our interviews revealed that few autonomous-vehicle owners turned to their in-car entertainment systems in hands-free moments. They actively planned ways to be productive while their cars were hooked up to electrical charging stations. Meanwhile, existing forms of built-in entertainment fell in the shadows of other technologies like smart phones and TVs.
          </p>
          <div className="multi-image">
            <div className="insight-container">
              <div className="insight-number">1</div>
              EV owners are rarely inside the car when charging.
            </div>
            <div className="insight-container">
             <div className="insight-number">2</div>
              In-vehicle games are often overlooked in favor of smartphones and other devices.
            </div>
            <div className="insight-container">
              <div className="insight-number">3</div>
              EVs are a potential channel for family bonding.
            </div>
          </div>
        </section>

        <section id="brainstorm" className="wide">
          <div className="col-60 multi-image">
            {/* <div className="image-container">
              <img style={{width: "100%"}} src={cabanaBrainstorm1}></img>
            </div> */}
            <div className="image-container">
              <img style={{width: "100%"}} src={cabanaBrainstorm2}></img>
            </div>
          </div>
          <div className="col-35">
            <h2>Brainstorm and Affinity Mapping.</h2>
            <p>
              My team then went through multiple ideation stages, first coming up with as many games as possible. Some of our initial ideas from the first brainstorming session included board games like LIFE and Monopoly, immersive experiences like Mario Kart and Pokemon Go, and old school games like Pac-Man and Space Invaders.
            </p>
            <p>
              In the second round of brainstorming, we honed in on our user research. We knew that the game should capitalize on the unique circumstances and relationships among people inside of the car. And we knew that we were up against some dominating forces that tugged at the attention of passengers. Here, we grouped our ideas into an affinity map to help structure our goals.
            </p>
          </div>
        </section>

        <section id="section-three" className="wide">
          <div className="col-60 multi-image">
            {/* <div className="image-container">
              <img style={{width: "100%"}} src={cabanaPrototype1}></img>
            </div> */}
            <div className="image-container">
              <img style={{width: "100%"}} src={cabanaPrototype2}></img>
            </div>
          </div>
          <div className="col-35">
            <h2>Rapid Prototypes.</h2>
            <p>
              We brought our user research, insights, and brainstorms to our Daimler liaisons in their Sunnyvale office and received feedback to move forward with 3 ideas: trivia, karaoke, and Draw Something.
            </p>
            <p>
             Based on our findings, we chose to focus on the common scenarios of driving in an EV with many family members. We found there to be an unique opportunity to frame the in-vehicle entertainment experience as not one that sought to replace smartphones, but one to complement them. We positioned these games as a way to strengthen relationships in a low-barrier, intuitive, and engaging format.
            </p>
            <p>
              We rapid-prototyped our ideas with pen-and-paper versions of each game, which meant to test the interactions that friends and family playing together would have. Then, we set up a car-like experience by arranging chairs as if they were the seats in a car, and taping a makeshift head-unit display to the wall in front of them.
            </p>
          </div>
        </section>
        
        <section id="prototype-insights" className="wide stack">
          <h2>Prototype Insights.</h2>
          <p className="col-60 mb-32">
            At this stage, we wanted to test our assumptions about interactions that people with close ties would have in a car. We told our participants to imagine they were on a long road trip in an autonomous vehicle. Their genuine friendships with each other were representative of our target segment, which primarily consisted of family with children along with groups of young adults (roommates, best friends, etc.).
          </p>
          <div className="multi-image">
            <div className="insight-container">
              <div className="insight-number">1</div>
                People love inside jokes, and build off of each other's energies to demonstrate depth of their relationship.
              </div>
            <div className="insight-container">
             <div className="insight-number">2</div>
                Friends love to compete against each other, especially if grouped into teams.
              </div>
            <div className="insight-container">
              <div className="insight-number">3</div>
                People want a chance to redeem themselves if they lose. They will keep playing until they feel they've won.
              </div>
          </div>
        </section>

        <section id="section-four" className="wide stack">
          <h2>Medium-Fidelity.</h2>
          <p className="col-60 mb-32">
            Among the games that we rapid-prototyped, we found that trivia offered the best mixture of positive feedback from testers and alignment with Daimler's vision. I led wireframing, starting with simple, low-fidelity flows to capture the important steps along a player's journey. The crucial aspects we wanted to pin down were designing for a touch-screen device, designing for user by multiple users at varying distances, and creating an intuitive, uncluttered interface.
          </p>
          <div className="multi-image">
            <div className="image-container">
              <img style={{width: "100%"}} src={cabanaMedFi1}></img>
            </div>
            <div className="image-container">
              <img style={{width: "100%"}} src={cabanaMedFi2}></img>
            </div>
            <div className="image-container">
              <img style={{width: "100%"}} src={cabanaMedFi3}></img>
            </div>
          </div>
        </section>
        
        <section id="section-five" className="wide stack">
          <h2>High-Fidelity and MVP.</h2>
          <p className="col-60">
            Before diving into development, I led efforts to create a fully-interactive high-fidelity prototype. This included defining a basic typographic system, color palette, and visual identity. With the help of a moodboard, we aimed to create a futuristic yet familiar, sleek, and bold vibe that could appeal across generations. Check out our interactive prototype <a href="https://tinyurl.com/cabanatrivia" target="_blank">here.</a>
          </p>
          <p className="col-60 mb-32">
            We developed our MVP in React and Firebase. This allowed us to extend our original prototypes to include features like player usernames, high scores, and a leaderboard. Don't just take my word for it - you can actually play our live game by clicking below!
          </p>
          <div className="col-50">
            <a href="https://master-dev.d28ds4nnoxwdjw.amplifyapp.com/" target="_blank">
              <img style={{width: "100%"}} src={cabanaFeature}></img>
            </a>
          </div>
        </section>

        <div className="project-button-container mt-64">
          <Link to="/carta">
            <button className="project-button">Previous: Carta</button>
          </Link>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}

export default Daimler;