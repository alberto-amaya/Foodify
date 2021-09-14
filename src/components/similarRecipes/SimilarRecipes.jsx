import React, { Fragment, useEffect, useState } from 'react';
import './SimilarRecipes.css';

import useFetch from "../../hooks/useFetch";
import {API_KEY} from "../../const";
import uniqueID from '../../helpers/uniqueID';

import { Link } from 'react-router-dom';
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
            <div className="similar-recipes">
                <h1 className="similiar-recipes--h1">It may interest you</h1>
            </div>
            <div className="similar-recipes--recipes">
                {recipeCards}
            </div>
        </Fragment>
    );
}

export default SimilarRecipes;