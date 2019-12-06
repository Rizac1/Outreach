import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import NFPList from "./pages/NFPlist";
import { NFPUser } from "./pages/NFPUser";
import { NoPage } from "./pages/NoPage";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Login } from "../src/login/login"
import { Authentication } from "../src/login"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <AuthProvider>
        <Layout>
          <Router>
            <Switch>

              <Route exact={true} path="/NFPUser" component={NFPUser} />
              <Route exact={true} path="/NFPlist" component={NFPList} />
              <Route exact={true} path="/Login" component={Login} />
              <Route exact={true} path="/" component={Home} />


              <Route component={NoPage} />
            </Switch>
          </Router>
        </Layout>
        </AuthProvider>
      </React.Fragment>
    );
  }
}

export default App;
