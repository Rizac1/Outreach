import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NFP } from "./pages/NFP";
import { User } from "./pages/User";
import { NoPage } from "./pages/NoPage";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Login2 } from "../src/login2/login2"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Login2} />
              <Route path="/Home" component={Home}/>
              <Route path="/User" component={User} />
              <Route path="/NFP" component={NFP} />
              <Route component={NoPage} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
