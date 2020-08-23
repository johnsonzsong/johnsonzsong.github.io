import React from "react";
import "../styles.scss";
import Header from "../components/Header";
import cabanaFeature from "../../static/cabanaFeature.png";

export default function Cabana() {
  return (
    <div className="body">
      <div className="container">
        <Header/>
        <div className="display">
          <div className="displayTitle">
            Cabana Trivia
          </div>
          <div className="displayBody">
            <strong>
              In-vehicle gaming experience for Mercedes-Benz head units.</strong>
          </div>
          <img className="featureImage" src={cabanaFeature}/>
        </div>
        <div className="banner">
          <div className="bannerHeader">
            Context
          </div>
          <div className="bannerBody">
            We partnered with Daimler to create a multiplayer touchscreen game for the Mercedes-Benz Head Unit in the autonomous driving era.
          </div>
        </div>
      </div>
    </div>
  );
}
