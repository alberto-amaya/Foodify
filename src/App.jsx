import React from 'react';
import './css/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Route render={({ location }) => (
        <TransitionGroup className="container">
          <CSSTransition appear={true} key={location.key} timeout={{ enter: 400, exit: 200 }} classNames="fade">
            <div className="inner">
              <Switch key={location.key} location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/recipe" component={Recipe} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Router>
  );
}

export default App;
