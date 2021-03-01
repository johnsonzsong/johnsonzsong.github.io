import React from 'react';
import { Helmet } from "react-helmet";
import "../styles.scss";
import { Link } from "gatsby";
import cartaAudit1 from "../../static/cartaAudit1.png";
import cartaAudit2 from "../../static/cartaAudit2.png";
import cartaFilterFlare1 from "../../static/cartaFilterFlare1.png";
import cartaFilterFlare2 from "../../static/cartaFilterFlare2.png";
import cartaFilterFlare3 from "../../static/cartaFilterFlare3.png";
import cartaSearchFlare1 from "../../static/cartaSearchFlare1.png";
import cartaSearchFlare2 from "../../static/cartaSearchFlare2.png";
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
              UX Research.
            </p>
            <p id="nav-three" onClick={() => {
              var elmnt = document.getElementById("section-three");
              elmnt.scrollIntoView();
            }}>
              Med-Fi.
            </p>
            <p id="nav-four" onClick={() => {
              var elmnt = document.getElementById("section-four");
              elmnt.scrollIntoView();
            }}>
              Hi-Fi.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-60">
          <section id="section-one">
            <h1> [WIP] Carta.</h1>
            <p>
              The CartaLab (or Carta) is a research group at Stanford trying to understand how students navigate their academic paths. Carta helps students learn about course choices and educators observe how students move through college. Read more about Carta <a href="https://cartalab.stanford.edu/" target="_blank">here</a>.
            </p>
            <div className="mt-64">
              <h2>Background.</h2>
              <p>
                My project over the course of 10 weeks was to redesign the course search process. Specifically, I conducted user research and comparator studies, and created low-to-high fidelity designs for the search results page.
              </p>
              <div className="background-facts">
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
              </div>
            </div>
          </section>
        </div>

        <section id="section-two" className="wide">
          <div className="col-60 multi-image">
            <div className="insight-container">
              <div className="insight-number">1</div>
              Most of the time, students know exactly what course they'd like to search on Carta, and search it by exact course code or name.
            </div>
            <div className="insight-container">
             <div className="insight-number">2</div>
              Or, they're looking for <b>one last class</b> to fit into their existing schedules (units-wise) or fulfill some elusive graduation requirement.
            </div>
          </div>
          <div className="col-35">
            <h2>UX Research.</h2>
            <p>
              My primary research focus was uncovering insights about the course filtering process. How did students use filters? What parameters did they filter by and in what order? What filters were desired?
            </p>
            <p>
              Through user interviews, I found that filters on the search results page were used in few limited cases. Students often entered exact-string queries of the course in question, and so didn’t always need to further filter results.
            </p>
            <p>
              However, a compelling use case for filters among students was in finding <b>one last course</b> - a filler course to complete their quarter schedule. The most frequently-used filters to help with this scenario was narrowing results by quarter, number of units, and fulfillment of graduation requirements (WAYS requirements).
            </p>
          </div>
        </section>

        <section id="audits" className="wide stack">
          <h2>Comparator Audits.</h2>
          <p className="col-60">
            Next, I found analogous search experiences to help explore and understand different search flows a user might take. Below are a couple of the numerous factors I considered when looking at existing search patterns, including what how filters were updated, how more filters were shown, and how search results were surfaced and categorized. I did this for Airbnb and Yelp (shown below) as well as for Fitness Blender, YouTube, Spotify, and more.
          </p>
          <p className="col-60 mb-32">
            These helped inform some of my initial low-fidelity mockups, as I explored different filtering, search results, and search bar interactions.
          </p>
          <div className="multi-image">
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaAudit1}></img>
            </div>
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaAudit2}></img>
            </div>
          </div>
        </section>

        <section id="section-three" className="wide stack mb-32">
          <h2>Medium-Fidelity.</h2>
          <p className="col-60">
          With this context, I embarked on concretizing my findings into rough, grayscale prototypes. The goal was to capture the essential hierarchies and layouts at a high level. I spent the majority of my time at this stage, practicing the <b>flare and focus</b> design thinking principle through 1. filtering search results and 2. navigating between different types of search results.
          </p>
        </section>

        <section id="med-fi-filters" className="wide">
          <div className="col-60 multi-image-vertical">
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaFilterFlare1}></img>
            </div>
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaFilterFlare2}></img>
            </div>
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaFilterFlare3}></img>
            </div>
          </div>
          <div className="col-35">
            <h2>Filtering Results.</h2>
            <p>
              I considered multiple ways of representing the information hierarchies implied by filters. In one version, I tried out a collapsible panel at the top of the page that either displayed or hid all possible filters. In the second, I explored a slide-out drawer which contained all filters. In the third, I tried out a row of dropdown selections with most salient filters, and then additional filters in a popup modal.
            </p>
            <p>
              My fellow designers and I evaluated the merits of each approach. Liam and Kaelyn appreciated the way a row of relevant filters gave users context for their search, and noted that the first two variations were lacking this context. Jordan and Kaelyn were cautious of using a popup modal, since it had the reverse effect of bringing the user out of context - it might have been too jarring, especially because it covered the underlying search results.
            </p>
            <p>
              I took my team's feedback and decided on a hybrid approach that used dropdown selections for the most-used filters, alongside a "More Filters" button that would open up a side panel drawer. Of note, I also focused on giving users feedback on which filters they selected, including a thorough consideration of ways that active/selected states can be leveraged to show which filters were applied.
            </p>
          </div>
        </section>

        {/* TODO: section about binary filter states */}

        <section id="med-fi-search" className="wide">
          <div className="col-60 multi-image-vertical">
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaSearchFlare1}></img>
            </div>
            {/* <div className="image-container">
              <img style={{width: "100%"}} src={cartaSearchFlare2}></img>
            </div> */}
          </div>
          <div className="col-35">
            <h2>Navigating Results.</h2>
            <p>
              One peculiarity of Carta search results is that there are multiple <i>types</i> of results: courses, professors/teaching staff, or even departments. This challenged me to design for smooth, intuitive navigation. My first attempt used a tabbed navigation to switch between all results, courses, people, and departments. Tabs were a natural course since they would be used to <b>logically chunk</b> results that were <b>parallel in nature</b>. Additionally, they were already used throughout numerous other pages on Carta. Shoutout to Liam for sharing a <a href="https://www.nngroup.com/articles/tabs-used-right/" target="_blank">great article from Nielsen Norman Group</a> about using tabs that helped inform this approach.
            </p>
            <p>
              I also tried using buttons (inspired by LinkedIn search) to navigate between result types. LinkedIn provided a great comparison, since it has the same pattern - search results include companies, job opportunities, people, posts, and more. Exploring this pattern gave me insights about how filter sets could be dynamic depending on type of result the user is looking at.
            </p>
          </div>
        </section>

        <section id="med-fi-insights" className="wide stack">
          <h2>Putting it All Together.</h2>
          <p className="col-60">
            {/* Below is the final result of this medium-fidelity stage of iterative flare and focus for search result filters and navigation. */}
          </p>
          <div className="multi-image">
            {/* <div className="image-container">
              <img style={{width: "100%"}} src={cartaSearchFlare1}></img>
            </div>
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaSearchFlare1}></img>
            </div>
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaSearchFlare1}></img>
            </div> */}
          </div>
        </section>

        <section id="section-four" className="wide">
          <div className="col-60 multi-image">
            <div className="image-container">
              {/* <img style={{width: "100%"}} src={cartaSearchFlare1}></img> */}
            </div>
          </div>
          <div className="col-35">
            <h2>High-Fidelity.</h2>
            <p>
              {/* The time I spent in medium-fidelity prototyping paid off, as  */}
            </p>
          </div>
        </section>

        <section id="section-five"></section>

      </div>
    </div>
    </PageTransition>
  );
}

export default Carta;