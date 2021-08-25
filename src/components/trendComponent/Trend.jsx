import React, { Fragment } from 'react'
import FoodCard from '../foodCard/FoodCard';
import './Trend.css';

const Trend = () => {
    return (
        <Fragment>
            <h1>Trends</h1>
            <div className="main-trend--trending-foods">
                <FoodCard image="https://spoonacular.com/recipeImages/716429-312x231.jpg" title="Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs" />
                <FoodCard image="https://spoonacular.com/recipeImages/654901-312x231.jpg" title="Pasta With Chicken and Broccoli" />
            </div>
        </Fragment>
    );
}

export default Trend;
