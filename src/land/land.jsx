// const React = require("react");
// const style = require("./land.css");
import React from "react";
import PropTypes from "prop-types";

import "./land.css";

export class Land extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    function ActionLink() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
  }

  render() {

    return (
      <div id="wrapper">
      <div className="land">        <svg data-layer="73d6199b-f14b-4575-8608-75a95d5d40d1" preserveAspectRatio="none" viewBox="0 -0.5 1920 1" className="line-1"><path d="M 0 0 L 1920 0" /></svg>
        <svg preserveAspectRatio="none" viewBox="-0.5 0 1 154" className="line-2"><path d="M 0 0 L 0 154" /></svg>
        <div className="for-work">For work </div>
        <div className="help">Help</div>
        <div className="sign-up">Sign Up</div>
        <div className="log-in">Log in</div>
        <div className="image-1"></div>
        <div className="rectangle-1"></div>
        <div className="rectangle-2"></div>
        <div className="outreachd">OUTREACHD</div>
        <div className="start-now">Start now</div>
        <div className="rectangle-3"></div>
        <div className="finding-specialized-skillsets-and-improvingengagement-can-often-be-challenging-outreachdmakes-it-easy-to-find-cooperate-knowledge-partnership-and-collaborate-with-volunteers-to-fill-in-thatknowledge-gap-that-is-critical-to-success">Finding specialized skillsets and improving<br />engagement can often be challenging, Outreachd<br />makes it easy to find cooperate knowledge partner<br />ship and collaborate with volunteers to fill in that<br />knowledge gap that is critical to success.</div>
        <div className="cooperations">Cooperations</div>
        <div className="not-for-profit">Not for Profit </div>
        <div className="providing-a-platform-for-corporations-to-efficiently-discover-opportunities-to-volunteer-supportof-specialize-skills-and-expertise-to-nfps">Providing a platform for corporations to efficiently <br />discover opportunities to volunteer support<br />of specialize skills and expertise to NFPs.</div>
        <div className="bring-awareness">Bring awareness</div>
      </div>
      </div>
    );
  }
}

Land.propTypes = {

}

Land.defaultProps = {

}


// module.exports = Land;
export default Land;
