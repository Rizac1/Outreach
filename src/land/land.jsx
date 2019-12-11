import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import mag from "../assets/mag.webp"

import "./land.css";

export class Land extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
   
  }
  render() {


    return (
      <div class="container">
        <div class="outreachd">OUTREACHD</div>
        <div class="image-1 float-right"></div>
        <div class="rectangle-1">
        <h3 class="bring-awareness"> To Bring Awareness </h3>
        <h1 class="cooperations">Corporations</h1>
        <p
      class="providing-a-platform-for-corporations-to-efficiently-discover-opportunities-to-volunteer-supportof-specialize-skills-and-expertise-to-nfps">Providing a platform for corporations to efficiently <br />discover opportunities to volunteer support<br />of specialize skills and expertise to NFPs.
      </p>
      
<br />
     <p class="not-for-profit">Not for Profit </p>
       <p class="finding-specialized-skillsets-and-improvingengagement-can-often-be-challenging-outreachdmakes-it-easy-to-find-cooperate-knowledge-partnership-and-collaborate-with-volunteers-to-fill-in-thatknowledge-gap-that-is-critical-to-success">Finding specialized skillsets and improving<br />engagement can often be challenging, Outreachd<br />makes it easy to find cooperate knowledge partner<br />ship and collaborate with volunteers to fill in that<br />knowledge gap that is critical to success.
       </p> 
       <Link to={"/"}>
          <button onClick="handleClick" class="rectangle-2">Start now</button>
        </Link>

      </div>
   




{/*
<div className="finding-specialized-skillsets-and-improvingengagement-can-often-be-challenging-outreachdmakes-it-easy-to-find-cooperate-knowledge-partnership-and-collaborate-with-volunteers-to-fill-in-thatknowledge-gap-that-is-critical-to-success">Finding specialized skillsets and improving<br />engagement can often be challenging, Outreachd<br />makes it easy to find cooperate knowledge partner<br />ship and collaborate with volunteers to fill in that<br />knowledge gap that is critical to success.</div>
        <div className="cooperations ">Cooperations</div>
        <div className="not-for-profit">Not for Profit </div>
        <div className="providing-a-platform-for-corporations-to-efficiently-discover-opportunities-to-volunteer-supportof-specialize-skills-and-expertise-to-nfps">Providing a platform for corporations to efficiently <br />discover opportunities to volunteer support<br />of specialize skills and expertise to NFPs.</div>
<div className="bring-awareness">To bring awareness</div>  */}
      </div>
      





      
    
    );
  }
}





// module.exports = Land;
export default Land;
