import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Home } from "./pages/Home";
import NFPList from "./pages/NFPlist";
import { NFPUser } from "./pages/NFPUser";
import { NoPage } from "./pages/NoPage";
import SignUp from "../src/login copy/signup"



ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

