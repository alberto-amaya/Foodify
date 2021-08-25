import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { API_KEY } from './const';
import useFetch from './hooks/useFetch';
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';

const App = () => {
 // const {data} = useFetch(`https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY}&includeNutrition=true`);
  //const {data} = useFetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=apples,+flour,+sugar&number=2`);
  const {data}= useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1&tags=vegetarian,dessert`)
  console.log(data);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/recipe" component={Recipe} />
      </Switch>
    </Router>
  );
}

export default App;
