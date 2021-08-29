import React, { Fragment, useEffect, useState } from 'react';
import './SimilarRecipes.css';

import useFetch from "../../hooks/useFetch";
import {API_KEY} from "../../const";
import uniqueID from '../../helpers/uniqueID';

import { Link } from 'react-router-dom';
import Icon from '../iconComponent/Icon';
import RecipeCard from '../recipeCard/RecipeCard';

const SimilarRecipes = (props) => {
    const { data, isPending } = useFetch(`https://api.spoonacular.com/recipes/${props.id}/similar?apiKey=${API_KEY}&number=4`); 
    const [ recipeCards, setRecipeCards ] = useState([]);

    useEffect(() => {
        if(!isPending){
            const recipeCards = data.map(data => {
                return <RecipeCard key={uniqueID()} id={data.id} title={data.title} />
            });
            setRecipeCards(recipeCards);
        }
    }, [isPending, data]);

    return (
        <Fragment>
            <div className="main-similar-recipes--header">
                <h1>It may interest you</h1>
                <Link to="/" className="link">
                    <p>More</p> <Icon name="next" width="27" height="27" color="#FFF" className="icon" />
                </Link>
            </div>
            <div className="main-similar-recipes--recipes">
                {recipeCards}
            </div>
        </Fragment>
    );
}

export default SimilarRecipes;