import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NFP } from "./pages/NFP";
import { User } from "./pages/User";
import { Login } from "./pages/Login"
import { NoPage } from "./pages/NoPage";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/User" component={User} />
              <Route path="/NFP" component={NFP} />
              <Route path="/Login" component={Login} />
              <Route component={NoPage} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
