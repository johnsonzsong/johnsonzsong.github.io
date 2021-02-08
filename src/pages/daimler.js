import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { Link } from "gatsby";
import cabanaFeature from "../../static/cabanaFeature.png";
import neil from "../../static/neil.png";
import alex from "../../static/alex.png";
import cabanaBrainstorm1 from "../../static/cabanaBrainstorm1.png";
import cabanaBrainstorm2 from "../../static/cabanaBrainstorm2.png";

const Daimler = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Johnson Song | Daimler</title>
      </Helmet>
      {/* NAV */}
      <div id="nav-container">
        <Link to="/">
          <div className="logo">JS.</div>
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
              Rapid Prototyping.
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

      <div className="container">
        <div className="col-60">
          <section id="section-one">
            <h1> Daimler. </h1>
            <p>
              The Mercedes-Benz Research and Development North America (MBRDNA), located in Sunnyvale, CA, is Daimler AG’s hub of cutting-edge technology and groundbreaking innovation. Researchers here focus on creating the next generations of connected, autonomous, electric vehicles and the ecosystems enabling them. Read more about MBRDNA here.
            </p>
            <div className="mt-64">
              <h2>Background.</h2>
              <p>
                As part of a senior capstone project course at Stanford, my team and I partnered with Daimler to create a multiplayer touchscreen game for the Mercedes-Benz Head Unit. Our liaisons at Daimler were interested in uncovering insights about in-vehicle entertainment in the autonomous driving era.
              </p>
              <p className="background-facts">
                <div> 
                  <p>DURATION</p>
                  <p>January - June 2020</p>
                </div>
                <div> 
                  <p>ROLES</p>
                  <p className="m-0">UX/UI Designer</p>
                  <p className="m-0">Frontend Developer</p>
                </div>
                <div> 
                  <p>TOOLS</p>
                  <p className="m-0">Figma</p>
                  <p className="m-0">React</p>
                </div>
              </p>
            </div>
          </section>
        </div>
        
        <section id="section-two" className="wide">
          <div className="col-60 multi-image">
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
          <div className="col-35">
            <h2>User Research.</h2>
            <p>
              As autonomy and electric vehicle charging become more established in the automotive industry, drivers will have an increasing opportunity to engage with in-vehicle entertainment.
            </p>
            <p>
              My team conducted user studies by observing and interviewing Tesla owners at Supercharger stations. We sought a better understanding of how owners of autonomous and electric vehicles interacted with and within their cars. We also took a trip to the nearby Palo Alto Tesla dealership to learn more about the current status of in-car entertainment technology. Here are two user personas to represent the aggregate profile of over 50 total user interviews.
            </p>
            <p>
              Our interviews revealed that few autonomous-vehicle owners turned to their in-car entertainment systems in hands-free moments. They actively planned ways to be productive while their cars were hooked up to electrical charging stations. Meanwhile, existing forms of built-in entertainment fell in the shadows of other technologies like smart phones and TVs.
            </p>
          </div>
        </section>
        
        <section id="brainstorm" className="wide">
          <div className="col-60 multi-image">
            <div className="persona-container">
              <img style={{width: "100%"}} src={cabanaBrainstorm1}></img>
            </div>
            <div className="persona-container">
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
          <img src={cabanaFeature} style={{
            width: "50%"
          }}></img>
          <div style={{width: "40%"}}>
            <h2>Rapid Prototyping.</h2>
            <p>
            With helpful feedback from our Daimler liaisons, we decided to move forward with 3 ideas: trivia, karaoke, and Draw Something. We brought our user research, insights, and brainstorm to our Daimler liaisons in their Sunnyvale office and received valuable feedback to consider moving forward in our prototyping stages.
            </p>
            <p>
              We rapidly-prototyped these 3 ideas by creating quick pen-and-paper versions of each game, which meant to test the interactions that friends and family playing together would have. Then, we set up a car-like experience by arranging chairs as if they were the seats in a car, and taping a makeshift head-unit display to the wall in front of them.
            </p>
          </div>
        </section>
        {/* TODO: KEY INSIGHTS SECTION TO CONNECT PROTOTYPE TO MED-FI. Key insights should also include why we chose trivia and the reasoning for focusing on this target segment. */}
        <section id="section-four" className="wide">
          <img src={cabanaFeature} style={{
            width: "50%"
          }}></img>
          <div style={{width: "40%"}}>
            <h2>Medium-Fidelity.</h2>
            <p>
              Among the games that we rapidly-prototyped, we felt that trivia offered the best mixture of positive feedback from testers, alignment with Daimler's vision, and our timeframe. We went ahead and started to create simple wireframes for our medium-fidelity prototype. Some key features that we were sure to keep in mind were designing for a touch-screen, designing for use by multiple people at various distances, and creating an intuitive, uncluttered interface.
            </p>
          </div>
        </section>
        <section id="section-five" className="wide">
          <img src={cabanaFeature} style={{
            width: "50%"
          }}></img>
          <div style={{width: "40%"}}>
            <h2>High-Fidelity and MVP.</h2>
            <p>
              In transitioning from medium-fidelity to high-fidelity, we used a moodboard to get at the core essence of the ambience (aka ~vibe~) we wanted for the game. We wanted the game, and more importantly, the entire in-vehicle gaming experience to exude futuristic yet familiar, sleek, luxurious, and bold. It was meant to be appealing for children and teenagers easily distracted by phones, and also be a nod to more retro games like Pac-Man and Space Invaders.
            </p>
            <p>
              With our high-fidelity designs, we were ready for development. We used React on the frontend UI paired with Firebase to store player data like usernames and high scores. Check out our interactive prototype below. But don't stop there -- you can actually play our live game by clicking on the play button!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Daimler;