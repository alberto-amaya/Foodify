import React, { Fragment, useEffect, useState } from 'react'
import FoodCard from '../foodCard/FoodCard';
import './Trend.css';
import useFetch from "../../hooks/useFetch";
import {API_KEY} from "../../const";
import uniqueID from '../../helpers/uniqueID';

const Trend = () => {
    const {data,isPending}= useFetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1&tags=vegetarian,dessert`);
    
    const [cards, setCards]=useState([]);

    console.log(data,isPending)
    useEffect(()=>{
        if(!isPending){
            const cards = data.recipes.map(data=>{
                return <FoodCard key={uniqueID} data={data} />
            });
            setCards(cards);
        }
    },[isPending,data])

    return (
        <Fragment>
            <h1>Trends</h1>
            <div className="main-trend--trending-foods">
                {cards}
            </div>
        </Fragment>
    );
}

export default Trend;
