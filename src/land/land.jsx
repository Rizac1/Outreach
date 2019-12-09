import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
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
  }  
  render() {

    return (
      <div class="container">
      <div class="land">    {/* Can be deleted and replace with navi/search */}  
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">OUTREACHD</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Non-Profile List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search NFPList Names</button>
            </form>
          </div>
        </nav>
        {/* Ends here */}
        <div className="image-1"></div>
        <div className="rectangle-1 float-left"></div>
        <Link to={"/Home"}>
        <button onClick="handleClick" className="rectangle-2">Start now</button>
        </Link>
        <div className="outreachd">OUTREACHD</div>
      
        {/* Can be deleted.  Search bar placeholder */}
      
        {/* Ends here */}
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





// module.exports = Land;
export default Land;
