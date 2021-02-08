import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";

const Carta = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Johnson Song | Carta</title>
      </Helmet>
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
  );
}

export default Carta;