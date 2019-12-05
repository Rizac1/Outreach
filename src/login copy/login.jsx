// const React = require("react");
// const style = require("./login.css");
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import "./login.css";

export class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          value: " ",
          name: props.name,
          windowWidth:0,
          windowHeight:0
          
      };

      this.updateDimensions = this.updateDimensions.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
    handleSubmit(event){
      alert("Sending to landing page!" + this.state.value);
      event.preventDefault();
    }
    componentDidMount(){
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount(){
      window.removeEventListener("resize", this.updateDimensions);
    }
    
    updateDimensions(){
      let windowWidth = typeof window !== "undefined" ? window.innerWidth: 0;
      let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    

    this.setState({windowWidth, windowHeight});
  }

  render() {

    const { windowWidth } = this.state;
    const sidebarCollasped = windowWidth < 1100;
    
    return (
        <div id="wrapper">
          <div  className="login">        <div data-layer="1b95d00d-ebc6-44ef-a711-96b9158f9cef" className="image-1"></div>
        <div  className="log-in-to-outreachd">Log in to OutReachD<br /><br /></div>
       <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="email" value={this.state.name} onChange={this.handleChange} className="rectangle-1"/>
        <input type="text" placeholder="password" value={this.state.name} className="rectangle-2"/>
        </form>
        <Link to={"./NFPList"}>
        <button className="rectangle-3">Log in </button></Link>
        <input type="checkbox" className="rectangle-4"/>
        <div  className="remember-me">Remember Me? </div>
        <Link to={"./NFPList"}>
        <div  className="new-to-outreachd-sign-up-now">New to OutReachD?  Sign up now</div>
        </Link>
        <svg  preserveAspectRatio="none" viewBox="-0.75 -0.75 292.5 456.5" className="path-1">
       
        </svg>
        <div  className="your-privacy-is-important-to-us-well-never-share-your-information"> Your privacy is important to us, we'll never share<br /> your information.</div>

        <div  className="rectangle-5"></div>
        <div className="rectangle-8"></div>
        <Link to={"./noPage"}>
        <div  className="fogot">Forgot?</div></Link>
</div>
</div>
    );
  }
}



export default Login;
          