import React, { useState, useEffect } from 'react';
import './RecipeCard.css';

import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const [ summary, setSummary ] = useState(props.summary); 

    useEffect(() => setSummary(summary.replace(/(&nbsp;|<([^>]+)>)/ig, "")) , [summary]);

    return (
        <Link to='/recipe' className="Link">
            <article className="Recipe-Card">
                <div className="Recipe-Card--recipeImage">
                    <img src={props.img} alt="recipe" />
                </div>
                <div className="Recipe-Card--recipeContent">
                    <h2>{props.title.substr(0,50)+'..'}</h2>
                    <p>{`${summary.substr(0,55)}...`}</p>
                </div>
            </article>
        </Link>
    );
}

export default RecipeCard;