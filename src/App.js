import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

//Apollo imports
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import LandingPage from "./views/LandingPage";
import Home from "./views/home/Home";
import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";

// styles
import "./App.scss";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

// apollo client setup
const client = new ApolloClient({
  uri:'https://d3vr82ig632z51.cloudfront.net/graphql'
})


const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }
  
  return (
    <Router>
      <ApolloProvider client = {client}>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1 mt-5">
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/home" component={Home} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </Container>
          {/* <Footer /> */}
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default App;
