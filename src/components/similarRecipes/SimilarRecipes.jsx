import React, { Fragment } from 'react';
import './SimilarRecipes.css';

import { Link } from 'react-router-dom';
import Icon from '../iconComponent/Icon';
import RecipeCard from '../recipeCard/RecipeCard';

const SimilarRecipes = () => {
    return (
        <Fragment>
            <div className="main-similar-recipes--header">
                <h1>It may interest you</h1>
                <Link to="/" className="link">
                    <p>More</p> <Icon name="next" width="27" height="27" color="#FFF" className="icon" />
                </Link>
            </div>
            <div className="main-similar-recipes--recipes">
                <RecipeCard id="716429" img="https://spoonacular.com/recipeImages/716429-312x231.jpg" title="Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs" />
            </div>
        </Fragment>
    );
}

export default SimilarRecipes;