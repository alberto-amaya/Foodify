import React, { Fragment } from 'react';
import './HotRecipes.css';

import { Link } from 'react-router-dom';
import Icon from '../iconComponent/Icon';
import RecipeCard from '../recipeCard/RecipeCard';

const HotRecipes = () => {
    return (
        <Fragment>
            <div className="main-hot-recipes--header">
                <h1>Hot Recipes</h1>
                <Link to="/" className="link">
                    <p>More</p> <Icon name="next" width="27" height="27" color="#FFF" className="icon" />
                </Link>
            </div>
            <div className="main-hot-recipes--recipes">
                <RecipeCard img="https://spoonacular.com/recipeImages/716426-312x231.jpg" title="Cauliflower, Brown Rice, and Vegetable Fried Rice" summary="Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked." />
                <RecipeCard img="https://spoonacular.com/recipeImages/716426-312x231.jpg" title="Cauliflower, Brown Rice, and Vegetable Fried Rice" summary="Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked." />
            </div>
        </Fragment>
    );
}

export default HotRecipes;