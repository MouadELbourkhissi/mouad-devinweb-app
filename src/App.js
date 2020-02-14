import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import First from './component/First';
import Join from './component/Join';
import Login from './component/Login';
import Contact from './component/Contact';

import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div>

      <Container>

        <Header />
        <br />
        <br />
        <br />
        <>
          <Router>
            <Switch>
              <Route exact path="/">
                <First />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/join">
                <Join />
              </Route>
              <Route exact path="/contactus">
                <Contact />
              </Route>
            </Switch>
          </Router>
        </>
      </Container>

    </div>


  );
}

export default App;
