import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import Footer from "../components/footer";
import SiteNavigation from "../components/nav";
import resume from "../../static/Johnson_Song_Resume.pdf";

import c3Logo2 from "../../static/c3Logo2.png";
import cartaLogo from "../../static/cartaLogo.svg";
import kangarooLogo from "../../static/kangaroo.jpeg";
import facebookLogo from "../../static/facebook.png";
import messengerLogo from "../../static/messenger.png";

import ResumeUnit from "../components/resumeUnit";

const Resume = () => {
  return (
    <PageTransition>
      <SEO title="Resume"></SEO>
      <div>
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

        <SiteNavigation />

        <div className="container">
          <div
            className="mb-64"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2>RESUMÉ</h2>
            <a href={resume} target="_blank" rel="noreferrer">
              Download{" "}
            </a>
          </div>

          <div
            className="col-80"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ flex: 2, marginRight: "8em" }}>
              <section>
                <h2 className="mb-16"> WORK EXPERIENCE </h2>
                <ResumeUnit
                  logo={c3Logo2}
                  company="C3.ai"
                  role="Product Design Intern"
                  timeFrame="June - August 2021"
                  description="Designing enterprise AI products for customer relationship management, reliability, and data."
                />
                <ResumeUnit
                  logo={cartaLogo}
                  company="Carta"
                  role="UX/UI Designer"
                  timeFrame="January - June 2021"
                  description="Designing the course search experience at Stanford University."
                />
                <ResumeUnit
                  logo={kangarooLogo}
                  company="Kangaroo"
                  role="Founding Head of Engineering"
                  timeFrame="September 2020 - May 2021"
                  description="Designing and developing MVP features for a stealth startup in the creator-social space."
                />
                <ResumeUnit
                  logo={facebookLogo}
                  company="Facebook (Gaming)"
                  role="Software Engineering Intern"
                  timeFrame="June 2020 - August 2020"
                  description="Developing MVP features for Facebook Gaming on web."
                />
                <ResumeUnit
                  logo={messengerLogo}
                  company="Facebook (Messenger)"
                  role="Software Engineering Intern"
                  timeFrame="June 2019 - August 2019"
                  description="Developing new iOS features for Messenger."
                />
              </section>
            </div>

            <div style={{ flex: 1 }}>
              <section>
                <h2 className="mb-16"> EDUCATION </h2>
                <p className="m-0 fs-med">
                  <b>Stanford University</b>
                </p>
                <p className="m-0 a-60">September 2020 - December 2021</p>
                <p>
                  M.S. Computer Science - HCI <br />
                  4.0/4.0 GPA
                </p>

                <p className="fs-med mt-32">
                  <b>Stanford University</b>
                </p>
                <p className="m-0 a-60">September 2016 - June 2020</p>
                <p>
                  B.S. Computer Science - HCI <br />
                  Minor in Economics <br />
                  3.9/4.0 GPA
                </p>
              </section>

              <section>
                <h2 className="mb-16"> SKILLS </h2>
                <p className="m-0 fs-med">
                  <b>Design</b>
                </p>
                <p>
                  Needfinding, design thinking, prototyping, wireframing, design
                  systems, journey mapping, information architecture, data
                  visualization, Figma
                </p>
                <p className="mt-32 fs-med">
                  <b>Engineering</b>
                </p>
                <p>React, Javascript, Java, HTML, CSS, C++, Objective-C</p>
              </section>

              <section>
                <h2 className="mb-16"> LANGUAGES </h2>
                <p>English, Mandarin, French (intermediate), Italian (basic)</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Resume;
