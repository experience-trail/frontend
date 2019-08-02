import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from './components/PrivateRoute'
import Loading from './components/Loading'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './views/Home'
import Profile from './views/Profile'
import { useAuth0 } from './react-auth0-spa'

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

// demo pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

// fontawesome
import initFontAwesome from './utils/initFontAwesome'
import Test from './components/Test'
initFontAwesome()

const App = () => {
	const { loading } = useAuth0()

	if (loading) {
		return <Loading />
	}

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/profile" component={Profile} />

        {/* Test pages */}
        <Route path="/test" component={Test} />

        {/* Demo pages */}
        <Route path="/components-demo" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons-demo"
          render={props => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page-demo"
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page-demo"
          render={props => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page-demo"
          render={props => <LoginPage {...props} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App
