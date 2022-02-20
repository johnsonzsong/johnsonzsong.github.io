import React from "react";
import { Helmet } from "react-helmet";
import "../styles.scss";
import { withPrefix } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import SEO from "../components/seo";
import Footer from "../components/footer";
import SiteNavigation from "../components/nav";
import resumePDF from "../../static/Johnson_Song_Resume.pdf";
import resumeJPG from "../../static/resumeJPG.jpg";

const Resume = () => {
  return (
    <PageTransition>
      <SEO title="Resume"></SEO>
      <Helmet>
        <script src={withPrefix("cursorScript.js")} type="text/javascript" />
      </Helmet>

      <SiteNavigation />

      <div className="container">
        <a href={resumePDF} target="_blank" rel="noreferrer">
          Download{" "}
        </a>
        <img className="resume-image" src={resumeJPG} alt="resume" />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Resume;
