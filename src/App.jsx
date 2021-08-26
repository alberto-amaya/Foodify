import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/recipe" component={Recipe} />
      </Switch>
    </Router>
  );
}

export default App;
