import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { API_KEY } from './const';
import useFetch from './hooks/useFetch';
import Home from './pages/Home/Home';

const App = () => {
 // const {data} = useFetch(`https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY}&includeNutrition=true`);
  //const {data} = useFetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=apples,+flour,+sugar&number=2`);
  const {data}= useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1&tags=vegetarian,dessert`)
  console.log(data);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
