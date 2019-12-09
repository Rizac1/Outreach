import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import NFPList from "./pages/NFPlist";
import { NFPUser } from "./pages/NFPUser";
import { NoPage } from "./pages/NoPage";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Login, AuthProvider } from "../src/login copy/login"
import { Land } from "../src/land/land";
import { Authentication } from "../src/login copy/login"
import SignUp from "../src/login copy/signup"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <AuthProvider>
          <Layout>
            <Router>
              <Switch>

                <Route exact={true} path="/Land" component={Land} />
                <Route exact={true} path="/NFPUser" component={NFPUser} />
                <Route exact={true} path="/NFPlist" component={NFPList} />
                <Route exact={true} path="/Login" component={Login} />
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/signup" component={SignUp}/>


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
