import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import NFPList from "./pages/NFPlist";
import { NFPUser } from "./pages/NFPUser";
import { NoPage } from "./pages/NoPage";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Login } from "../src/login-copy/login"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>

              <Route path="/NFPUser" component={NFPUser} />
              <Route path="/NFPlist" component={NFPList} />
              <Route path="/Login" component={Login} />
              <Route path="/" component={Home}/>
          
    
              <Route component={NoPage} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
