import React, { Fragment, useEffect, useState } from 'react'
import FoodCard from '../foodCard/FoodCard';
import './RandomRecipes.css';
import useFetch from "../../hooks/useFetch";
import {API_KEY} from "../../const";
import uniqueID from '../../helpers/uniqueID';

const RandomRecipes = () => {
    const { data, isPending } = useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=5&tags=vegetarian,dessert`);
    
    const [ cards , setCards ] = useState([]);

    useEffect(()=>{
        if(!isPending){
            const cards = data.recipes.map(data => {
                return <FoodCard key={uniqueID()} data={data} />
            });
            setCards(cards);
        }
    },[isPending,data])

    return (
        <Fragment>
            <h1>Random</h1>
            <div className="main-trend--trending-foods">
                {cards}
            </div>
        </Fragment>
    );
}

export default RandomRecipes;
