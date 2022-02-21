import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import cartaAffinityMap from "../../static/cartaAffinityMap.jpeg";
import cartaAudit1 from "../../static/cartaAudit1.png";
import cartaAudit2 from "../../static/cartaAudit2.png";
import cartaFilterFlare1 from "../../static/cartaFilterFlare1.png";
import cartaFilterFlare2 from "../../static/cartaFilterFlare2.png";
import cartaFilterFlare3 from "../../static/cartaFilterFlare3.png";
import cartaLayout1 from "../../static/cartaLayout1.png";
import cartaLayout2 from "../../static/cartaLayout2.png";
import cartaLayout3 from "../../static/cartaLayout3.png";
import cartaMedFinal1 from "../../static/cartaMedFinal1.png";
import cartaColors from "../../static/cartaColors.png";
import cartaHifi from "../../static/cartaHifi.png";
import cartaFeature from "../../static/cartaFeature.png";
import PageTransition from "gatsby-plugin-page-transitions";
import { withPrefix } from "gatsby";
import SEO from "../components/seo";
import Footer from "../components/footer";
import SiteNavigation from "../components/nav";

const Carta = () => {
  return (
    <PageTransition>
      <SEO title="Carta"></SEO>
      <Helmet>
        <script src={withPrefix("navScript.js")} type="text/javascript" />
        <script src={withPrefix("cursorScript.js")} type="text/javascript" />
      </Helmet>
      {/* NAV */}
      <SiteNavigation />
      <div className="container">
        <button
          id="backToTop-container"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </button>

        <div className="project-container">
          <section className="text-center">
            <h1 className="project-title"> Carta </h1>
            <p>
              Designing the course search experience at Stanford University.
            </p>
            <div className="image-container mt-32 nb">
              <img style={{ width: "100%" }} src={cartaFeature} alt="carta feature"></img>
            </div>
            <div className="mt-64">
              <div className="background-facts">
                <div>
                  <h3>Role</h3>
                  <p>UX/UI Designer</p>
                </div>
                <div>
                  <h3>Duration</h3>
                  <p>January - June 2021</p>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Stanford, CA</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>User Interviews</h2>
            <p>
              I began by conducting user interviews through Zoom and
              screen-share in order to uncover insights about the search
              experience on Carta. I asked questions such as:
              <ul>
                <li>When and how often did students search?</li>
                <li>What are their main goals when searching for classes?</li>
                <li>How did they narrow down their list of classes?</li>
              </ul>
            </p>
            <div className="image-container mb-32">
              <img style={{ width: "100%" }} src={cartaAffinityMap}></img>
            </div>
          </section>

          <section>
            <h2>Findings</h2>
            <p>
              I found that students often entered exact-string queries courses
              because they knew what they were looking for. This was a common
              case because students just wanted additional information about the
              courses required by their degree programs.
            </p>
            <br />
            <p>
              However, another compelling use case for filters among students
              was in finding <b>one last course</b> - a filler course to
              complete their schedule. The most frequent behaviors in this
              scenario were narrowing results by quarter, number of units, and
              fulfillment of graduation requirements (WAYS requirements).
            </p>
            <div className="row mt-32">
              <div className="multi-image">
                <div className="insight-container">
                  <div className="insight-number">1</div>
                  <br />
                  <b>Degree comes first.</b>
                  <br />
                  Most of the time, students know exactly what course they need
                  to take in order to stay on track to graduate from their
                  degree program.
                </div>
                <div className="insight-container">
                  <div className="insight-number">2</div>
                  <br />
                  <b>One last class.</b>
                  <br />
                  Other times, students need just one class to round out their
                  quarter based on some requirements, such as WAYS, units, or
                  even time of day.
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Comparator Audits</h2>
            <p>
              Next, I found analogous search experiences to help explore and
              understand different search flows a user might take. I considered
              uses cases for how filters were updated, how additional filters
              were displayed, and how search results were surfaced and
              categorized.
            </p>
            <br />
            <p>
              These helped inform some of my initial low-fidelity mockups, as I
              explored different filtering, search results, and search bar
              interactions.
            </p>
            <div className="multi-image mt-32">
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaAudit1}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaAudit2}></img>
              </div>
            </div>
          </section>

          <section>
            <h2>Filtering</h2>
            <p>
              I considered multiple ways of representing the information
              hierarchies implied by filters. In one version, I tried out a
              collapsible panel at the top of the page. In the second, I
              explored a slide-out drawer. In the third, I tried out a row of
              dropdown selections and additional filters in a modal.
            </p>
            <div className="multi-image-vertical mt-32">
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaFilterFlare1}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaFilterFlare2}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaFilterFlare3}></img>
              </div>
            </div>
            <p className="mt-32">
              My fellow designers and I evaluated the merits of each approach.
              Liam and Kaelyn appreciated the way a row of relevant filters gave
              users context for their search, and noted that the first two
              variations were lacking this context. Jordan and Kaelyn were
              cautious of using a popup modal, since it had the reverse effect
              of bringing the user out of context - it might have been too
              jarring, especially because it covered the underlying search
              results.
            </p>
            <br />
            <p>
              I took my team's feedback and decided on a hybrid approach that
              used dropdown selections for the most-used filters, alongside a
              "More Filters" button that would open up a side panel drawer. Of
              note, I also focused on giving users feedback on which filters
              they selected, including a thorough consideration of ways that
              active/selected states can be leveraged to show which filters were
              applied.
            </p>
          </section>

          {/* TODO: section about binary filter states or search bar?*/}

          <section>
            {/* <div className="col-60 multi-image-vertical">
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaSearchFlare1}></img>
            </div>
            <div className="image-container">
              <img style={{width: "100%"}} src={cartaSearchFlare2}></img>
            </div>
          </div> */}
            <h2>Navigating Results</h2>
            <p>
              One peculiarity of Carta search results is that there are multiple{" "}
              <i>types</i> of results: courses, professors/teaching staff, or
              even departments. Tabs were a natural consideration since they
              would be used to <b>logically chunk</b> results that were{" "}
              <b>parallel in nature</b>. Additionally, they were already used
              throughout other pages on Carta. Shoutout to Liam for sharing a{" "}
              <a
                href="https://www.nngroup.com/articles/tabs-used-right/"
                target="_blank"
              >
                great article from Nielsen Norman Group
              </a>{" "}
              about using tabs that helped inform this approach.
            </p>
            <div className="multi-image mt-32">
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaLayout1}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaLayout2}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaLayout3}></img>
              </div>
            </div>
            <p className="mt-32">
              I explored a grid layout more geared towards exploration and
              recommendation rather than filtering. This was inspired by
              Spotify's analogous search patterns and was an interesting case
              study of breadth vs. depth of results.
            </p>
            <br />
            <p>
              I also tried using buttons (inspired by LinkedIn search) to
              navigate between result types. LinkedIn provided a great
              comparison with search results spanning companies, job
              opportunities, people, posts, and other categories. Exploring this
              pattern gave me insights about how filter sets could be dynamic
              depending on the type of result a user is looking at.
            </p>
          </section>

          <section>
            <h2>Putting it All Together</h2>
            <p>
              A major design decision I made was to remove the "All Results"
              tab. Since our research showed that students are searching for
              courses in the majority of cases (~90% of the time), it would
              reduce friction to just display the courses as a default.
            </p>
            <br />
            <p>
              Since showing an "All Results" tab would always require students
              to have to specifically switch to Courses, or People, or
              Departments to see more, I decided that removing this would bring
              them one step closer to an intuitive and efficient search flow,
              without sacrificing the experience.
            </p>
            <div className="image-container mt-32">
              <img style={{ width: "100%" }} src={cartaMedFinal1}></img>
            </div>
          </section>

          <section>
            <h2>Design System</h2>
            <p>
              I made sure that I was using all patterns, components, and colors
              consistently within our design system. Then, I linked up the
              interactions into a fully-functional, usable prototype that would
              help the hand-off process to the development team. I also included
              commentary on expected behaviors for the flows, including cases
              for null results, different search queries, and peculiarities in
              filter criteria.
            </p>
            <div className="multi-image mt-32">
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaHifi}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={cartaColors}></img>
              </div>
            </div>
          </section>

          <section>
            <h2>Takeaways</h2>
            <p>
              This was my first time working on a real, structured design team,
              and I am incredibly grateful for the opportunity. I wouldn't want
              to have had my first structured design critiques, brainstorming
              sessions, and design banters with anyone else - so huge huge
              shoutout to my design team: Kristina, Liam, Jordan, and Kaelyn.
            </p>
            <br />
            <p>
              I was surprised by both how much I knew, and how little I knew, of
              the design process. Sure, I'd heard of and practiced needfinding,
              brainstorming, and prototyping before. However, I didn't realize
              how many wild and exciting directions design could take me, with a
              feature as seemingly straightforward as filters, no less! I am
              excited to continue applying what I've learned to future design -
              and even engineering - projects.
            </p>
            <div className="multi-image mt-32">
              <div className="insight-container">
                <div className="insight-number">1</div>
                <br />
                Be unafraid to ask for help.
              </div>
              <div className="insight-container">
                <div className="insight-number">2</div>
                <br />
                Stay anchored with the user end goal.
              </div>
              <div className="insight-container">
                <div className="insight-number">3</div>
                <br />A supportive design team is one of your greatest design
                tools.
              </div>
            </div>
          </section>

          <div className="bottom-buttons-container mb-64">
            <Link to="/goodreads">
              <div className="project-link">&#10229; Prev: Goodreads</div>
            </Link>
            <Link to="/daimler">
              <div className="project-link">Next: Daimler &#10230;</div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Carta;
