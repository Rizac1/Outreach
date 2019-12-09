import "bootstrap/dist/css/bootstrap.min.css";
import {business} from "../login copy/assets/image-1.png"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import firebase from "../firebase"
import { SignUp } from "./signup"
import PasswordMask from "react-password-mask"

import "./login.css";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      name: props.name,
      windowWidth: 0,
      windowHeight: 0

    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Sending to landing page!" + this.state.value);
    event.preventDefault();
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;


    this.setState({ windowWidth, windowHeight });
  }

  state = {
    isPasswordShown: false
  };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render() {
    const { isPasswordShown } = this.state;
    const { windowWidth } = this.state;
    const sidebarCollasped = windowWidth < 1100;

    return (
      <div class="container">
        {/*Nav */}
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
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
{/* News feed */}
<div class="col-12 col-sm-6 col-md-8 float-right d-flex justify-content-center sticky-top">
  <div class="p-2">News Feed</div>
  <div class="p-2">News Feed</div>
  <div class="p-2">News Feed</div>
  <div class="p-2">News Feed</div>
    </div>

        <form> {/* Email and Password */}
        <div class="form-group">
          <h2 class="above">Log in to OutReachD</h2>
          <input type="email" class="form-control shadow p-3 mb-5 bg-light rounded rectangle-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <input type={isPasswordShown ? "text" : "password"} class="form-control shadow p-3 mb-5 bg-light rounded rectangle-2" id="exampleInputPassword1" placeholder="Password"/>
            <i className={`fa ${isPasswordShown ? "fa-eye" : "fa-eye-slash"} password-icon`} onClick={this.togglePasswordVisiblity} />
    </div>
    
    <div class="form-check mb-2 mr-sm-2">
    <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
    <label class="form-check-label remember"for="inlineFormCheck">
      Remember me?
    </label>
  </div>
  <Link to={"./NFPList"}>
  <button type="button" class="btn btn-primary rectangle-3">Log In</button></Link>
  </form>
 
            <Link to={"./signup"}>
              <div className="new-to-outreachd-sign-up-now">New to OutReachD?  Sign up now</div>
            </Link>
  



{/* Background image.   Broken. */}
{/*<img src="assets/image-1.png"></img>
  <div class="float-right"><img src="assets/image-1.png" class="img-fluid" alt="Responsive image"/>
Preview
Float right on all viewport sizes</div>
    */}

          </div>
          )
        }
      }
      
         
      
      
      
     