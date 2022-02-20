import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import grStickies from "../../static/grStickies.png";
import grAudit1 from "../../static/grAudit1.png";
import grAudit2 from "../../static/grAudit2.png";
import grSocialCurrent from "../../static/grSocialCurrent.png";
import grSocial1 from "../../static/grSocial1.png";
import grSocial2 from "../../static/grSocial2.png";
import grSearchCurrent from "../../static/grSearchCurrent.png";
import grDiscoveryCurrent from "../../static/grDiscoveryCurrent.png";
import grDiscovery1 from "../../static/grDiscovery1.png";
import grDiscovery2 from "../../static/grDiscovery2.png";
import grLibraryCurrent1 from "../../static/grLibraryCurrent1.png";
import grLibraryCurrent2 from "../../static/grLibraryCurrent2.png";
import grLibrary1 from "../../static/grLibrary1.png";
import grLibrary2 from "../../static/grLibrary2.png";
import grHifi1 from "../../static/grHifi1.gif";
import grHifi2 from "../../static/grHifi2.gif";
import grHifi3 from "../../static/grHifi3.gif";
import grFinal from "../../static/grFinal.png";

import PageTransition from "gatsby-plugin-page-transitions";
import { withPrefix } from "gatsby";
import SEO from "../components/seo";
import Footer from "../components/footer";
import SiteNavigation from "../components/nav";

const Goodreads = () => {
  return (
    <PageTransition>
      <SEO title="Goodreads"></SEO>
      <Helmet>
        <script src={withPrefix("navScript.js")} type="text/javascript" />
        <script src={withPrefix("cursorScript.js")} type="text/javascript" />
      </Helmet>
      {/* NAV */}
      <SiteNavigation />

      <div className="container">
        <div
          id="backToTop-container"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </div>

        <div className="project-container">
          <section className="text-center">
            <h1 className="project-title"> Goodreads </h1>
            <p>
              Redesigning the world’s largest site for readers and book
              recommendations.
            </p>
            <div className="image-container mt-32 nb">
              <img style={{ width: "100%" }} src={grFinal}></img>
            </div>
            <div className="mt-64">
              <div className="background-facts">
                <div>
                  <h3>Role</h3>
                  <p>UX/UI Designer</p>
                </div>
                <div>
                  <h3>Duration</h3>
                  <p>March 2021</p>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Home</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Background</h2>
            <p>
              Goodreads is the world’s largest site for readers and book
              recommendations. According to the{" "}
              <a
                href="https://www.goodreads.com/about/us"
                target="_blank"
                rel="noreferrer"
              >
                Goodreads website
              </a>
              , its mission is to help people find and share books they love.
            </p>
            <br />
            <p>
              Instead of roadtripping through Joshua Tree and Death Valley for
              spring break this year, I decided to embark on a different kind of
              journey - a UX/UI case study and redesign of Goodreads. Over the
              course of one week, I researched, tested, and prototyped a
              reimagined mobile experience for Goodreads. This project was not
              endorsed by, directly affiliated with, maintained, authorized, or
              sponsored by Goodreads.
            </p>
          </section>

          <section>
            <h2>Research</h2>
            <p>
              My first step towards better understanding the ways in which
              readers currently use the Goodreads mobile app was conducting user
              research. Due to COVID-19, I decided to take a digital approach,
              turning to Reddit as a method of crowd-sourced needfinding. I read
              through a handful of recent threads in which Goodreads users
              vented about frustrations they found with the platform.
            </p>
            <br />
            <p>
              In addition to gathering insights from Reddit forums, I also
              reached out to friends that I knew were active on Goodreads. This
              allowed me to have more in-depth conversations about painpoints,
              joys, and behaviors within the app. I distilled important
              learnings and quotes from this combination of crowd-sourced and
              individual interviews and then categorized them using affinity
              mapping.
            </p>
            <div className="image-container mt-32">
              <img
                style={{ width: "100%" }}
                src={grStickies}
                alt="sticky notes"
              ></img>
            </div>
            <p className="mt-32">
              Beyond qualms with the clunky interface of the current Goodreads
              mobile app, I identified two themes to the user feedback. The
              first was a tension between <b>being social</b> on the app and
              engaging with friends' reading activities, and wanting to purely
              track <b>personal activity</b>. The other was a frustration at the
              limited emphasis Goodreads placed on{" "}
              <b>discoverability of books</b>.
            </p>
            <div className="row mt-32">
              <div className="multi-image">
                <div className="insight-container">
                  <div className="insight-number">1</div>
                  <br />
                  Social aspect of Goodreads contribute positively to the
                  reading experience, but there is a{" "}
                  <b>tension between public and private</b> reading activity.
                </div>
                <div className="insight-container">
                  <div className="insight-number">2</div>
                  <br />
                  While Goodreads has plenty of these resources to support{" "}
                  <b> personalized exploration and recommendation</b> they are
                  obscure and underutilized.
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Comparator Audits</h2>
            <p>
              After my preliminary research, my next step was to conduct
              comparator audits of similar apps and UX patterns found in
              Goodreads. I looked at both existing reading app competitors such
              as Reading List and Libib, as well as apps in different domains
              but with similar patterns, like Spotify's explore flow and
              playlist library and Twitter's social feed. Below are some
              annotated screenshots of my comparative analyses.
            </p>
            <div className="multi-image-vertical mt-32">
              <div className="image-container nb">
                <img style={{ width: "100%" }} src={grAudit1}></img>
              </div>
              <div className="image-container nb">
                <img style={{ width: "100%" }} src={grAudit2}></img>
              </div>
            </div>
            <p className="mt-32">
              My user research, affinity mapping, and comparator audits provided
              the groundwork to explore basic grayscale wireflows to tackle the
              painpoints and opportunity spaces that I uncovered. I approached
              my ideation and prototype stage by focusing on the three
              categories identified in the user research:{" "}
              <b>social, discovery, and record-keeping.</b>
            </p>
          </section>

          <section>
            <h2>Social</h2>
            <p>
              The current Goodreads app opens to a home screen that attempts to
              do it all: there is a search bar to look up books by title,
              author, or ISBN; there are social updates from friends' reading
              activity; and there are recommendations from Goodreads based on
              your reading history. This is confusing to the user because
              there's <b>no clear primary function</b> of the home page!
            </p>
            <div style={{ display: "flex" }}>
              <div className="image-container mt-32 mb-32 nb">
                <img
                  style={{ width: "30%", alignSelf: "center" }}
                  src={grSocialCurrent}
                ></img>
              </div>
            </div>

            <p>
              My social explorations aimed to provide <b>focus</b> to the
              homepage. If it was to be social, then I believed I could better
              leverage the social aspects of reading that Goodreads users loved.
              Thus, one flow I explored was an activity feed that could be
              toggled between self-view and friend-view (a la Venmo). Here, the
              focus is clear: the homepage is a hub for engaging with readers,
              and there is a clear distinction between what is <i>yours</i>{" "}
              versus what is <i>your friends'</i>.
            </p>
            <div className="image-container mt-32 mb-32">
              <img style={{ width: "100%" }} src={grSocial1}></img>
            </div>

            <p>
              I also explored a flow in which the homepage served mainly for
              personal discovery. In this version, social activity is not
              present at all on the homepage, and instead are accessible through
              the user's profile (and consequently, friends). Instead, the
              homepage gives recommendations and easy entry points to discover
              genres and books.
            </p>
            <div className="image-container mt-32 mb-32">
              <img style={{ width: "100%" }} src={grSocial2}></img>
            </div>
          </section>

          <section>
            <h2>Discovery</h2>
            <p>
              Currently, the Goodreads mobile app has one navigation item called
              "Discover" and one for "Search." Yet the "Discover" has absolutely
              no personalization based on user reading history whatsoever -- if
              the user wanted to get curated recommendations, they would have to
              go to an obscure page within their profile called
              "Recommendations." Bottom line?{" "}
              <b>
                Discoverability was a heavily underutilized feature that users
                wanted but could rarely find easily.
              </b>{" "}
              Additionally, having both "Search" and "Discoverability" felt like
              a redundant pattern that cluttered the navigation bar and offered
              little extra utility for users.
            </p>
            <div className="multi-image mt-32 mb-32 nb">
              <div className="image-container">
                <img style={{ width: "100%" }} src={grSearchCurrent}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={grDiscoveryCurrent}></img>
              </div>
            </div>

            <p>
              Thus, my medium-fidelity explorations for discovery aimed to make
              use of <b>personalized content and easy discoverability</b>.
            </p>
            <div className="multi-image mt-32 mb-32 nb">
              <div className="image-container">
                <img style={{ width: "100%" }} src={grDiscovery1}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={grDiscovery2}></img>
              </div>
            </div>
          </section>

          <section>
            <h2>Record-keeping</h2>
            <p>
              One of the most-used features for users of Goodreads is to keep
              track of reading history, including books they're currently
              reading and books they want to read. Simplicity is key in this
              interaction, since tracking books happens frequently.
            </p>
            <br />
            <p>
              The existing Goodreads app makes it surprisingly difficult and
              unintuitive how to add books to a collection. For example, within
              a "shelf", there is no explicit call-to-action for users to add
              books. This process is hidden in the three-dot menu at the top
              right corner of the page. Additionally, while there is a way to
              search for books within all shelves at once, it's impossible to
              search for books within a particular shelf.
            </p>
            <div className="multi-image mt-32 mb-32 nb">
              <div className="image-container">
                <img style={{ width: "100%" }} src={grLibraryCurrent1}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={grLibraryCurrent2}></img>
              </div>
            </div>

            <p>
              My explorations sought to simplify the user's library, making it
              easier to navigate, view, and modify collections. I also explored
              how to make it more explicit what content was private versus what
              was public, since my research found that people were often
              confused.
            </p>
            <div className="multi-image mt-32 mb-32 nb">
              <div className="image-container">
                <img style={{ width: "100%" }} src={grLibrary1}></img>
              </div>
              <div className="image-container">
                <img style={{ width: "100%" }} src={grLibrary2}></img>
              </div>
            </div>
          </section>

          <section>
            <h2>High-fidelity Prototype</h2>
            <p className="mb-32">
              My main visual goals and principles for this Goodreads redesign
              were: <b>simplicity</b>, <b>discoverability</b>, and{" "}
              <b>efficiency</b>. How could I convey a clean, intuitive interface
              for users to accomplish the goals that I uncovered through my user
              research and wireframe explorations? Sticking to these principles
              helped me to make higher-level decisions about how to best convey
              information in an easily-recognizable manner.
            </p>
            <div className="image-container nb">
              <img style={{ width: "100%" }} src={grFinal}></img>
            </div>

            <p>
              My final homepage design intends to clearly delineate the social
              aspect of Goodreads with a purely social feed of friends' reading
              activity. The old search bar is replaced with a way for users to
              access their personal profiles, where they can easily see all
              their personal reading activity. This is supported by the decision
              to simplify the Goodreads navigation to three top-level items
              (home, discover, and library), rather than the original five.
              Additionally, I gave the UI an update to feel sleeker while
              maintaining the recognizability of previous components.
            </p>
            <div className="image-container nb mt-32 mb-32">
              <img
                style={{ width: "50%", alignSelf: "center", borderRadius: 32 }}
                src={grHifi1}
              ></img>
            </div>

            <p>
              My redesigned discover page allowed me to get creative with visual
              treatment. Starting from the top, I included a row of searchable
              tags with keywords and genres for easy access. Under it, I created
              a scrollable banner to show off the featured books/lists and any
              announcements from the platform. This was a good way to
              differentiate this highlighted content versus the rest of the
              page. Then, instead of having only a list of static genres like
              the existing Goodreads app, I wanted to make the discover page
              more personalized and curated. This manifests in a "Hand-picked
              for you" section of lists recommended to each user. Then, there is
              another horizontally-scrollable section for recommended books
              based on ones that the user has enjoyed recently. Underneath, the
              user can then browse and explore generic categories, like genres.
            </p>
            <div className="image-container nb mt-32 mb-32">
              <img
                style={{ width: "50%", alignSelf: "center", borderRadius: 32 }}
                src={grHifi2}
              ></img>
            </div>

            <p>
              Finally, my redesign of the library page (currently in the app as
              "My Books") was to make the acts of viewing, creating, and
              modifying collections as intuitive as possible. Similarly, I
              wanted to make the task of tracking books within these collections
              seamless. My redesign features a new view of collections, which
              emphasizes immediately pertinent information about each
              collection.
            </p>
            <br />
            <p>
              Within each collection, I've redesigned the UX to make it much
              simpler to add books through a clear button at the top. I've also
              made the book previews more functional by allowing users to remove
              them easily from a list from a three-dot menu. In this menu, users
              can also find a feature to add private notes to books, which I
              felt bridged a gap between readers' desires to track specific
              thoughts about books in more private way than in public reviews.
            </p>
            <div className="image-container nb mt-32 mb-32">
              <img
                style={{ width: "50%", alignSelf: "center", borderRadius: 32 }}
                src={grHifi3}
              ></img>
            </div>

            <p className="mb-32">
              You can check out my prototype{" "}
              <a
                href="https://www.figma.com/proto/eYYsWMfDZFOCbjtn7kTVwP/Goodreads-Case-Study?node-id=219%3A0&viewport=339%2C785%2C0.38783445954322815&scaling=scale-down&page-id=24%3A3"
                target="_blank"
              >
                here
              </a>{" "}
              and below.
            </p>
            <iframe
              width={800}
              height={450}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeYYsWMfDZFOCbjtn7kTVwP%2FGoodreads-Case-Study%3Fnode-id%3D219%253A0%26viewport%3D339%252C785%252C0.38783445954322815%26scaling%3Dscale-down%26page-id%3D24%253A3"
              allowfullscreen
            ></iframe>
          </section>

          <section>
            <h2>Takeaways</h2>
            <p>
              This was my first independent case study and redesign, which I
              finally felt comfortable pursuing due to my more recent
              experiences refining my own design approach. I had a blast
              embarking on this week-long side project, partly because I am a
              book/Goodreads fanatic and mostly because the process was so
              rewarding. I am proud of my growth as a designer but know that
              there is a lot to learn and improve upon. With more time, I would
              have liked to conduct more user testing to iterate on the UX,
              consider the book details pages and interactions within those, and
              fleshed out the interactions on the screens that I did design.
            </p>
            <br />
            <p>
              Shoutout to Ben Demonbreun, my friend and fellow Goodreads
              enthusiast who supported me from start to finish with this
              project!
            </p>
          </section>

          <div className="bottom-buttons-container mb-64">
            <Link to="/carta">
              <div className="project-link">Next: Carta &#10230;</div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>

    </PageTransition>
  );
};

export default Goodreads;
