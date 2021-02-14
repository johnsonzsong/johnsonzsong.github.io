import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { Link } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';

const Carta = () => {
  return (
    <PageTransition>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Johnson Song | Carta</title>
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
            {/* <p id="nav-two" onClick={() => {
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
            </p> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-60">
          <section id="section-one">
            <h1> Carta. </h1>
            <p>
              The CartaLab (or Carta) is a research group at Stanford trying to understand how students navigate their academic paths. Carta helps students learn about course choices and educators observe how students move through college. Read more about Carta here.
            </p>
            <div className="mt-64">
              <h2>Background.</h2>
              <p>
                My project over the course of 10 weeks was to redesign the course search process. Specifically, I conducted user research and comparator studies, and created low-to-high fidelity designs for the search results page.
              </p>
              <p className="background-facts">
                <div> 
                  <p>DURATION</p>
                  <p>January 2021 - now</p>
                </div>
                <div> 
                  <p>ROLES</p>
                  <p>UX/UI Designer</p>
                </div>
                <div> 
                  <p>TOOLS</p>
                  <p>Figma</p>
                </div>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}

export default Carta;