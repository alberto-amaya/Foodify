import React from 'react'
import './FoodCard.css';
import { Link } from 'react-router-dom';

const FoodCard = ({data}) => {
    const { title, image } = data;

    return (
        <Link to="/recipe" >
            <div className="Food-Card">
                <img className="Food-Card--img" src={image} alt={title} />
                <div className="Food-Card--title">
                    <h2>{`${title.substr(0,55)}..`}</h2>
                </div>
            </div>
        </Link>
    );
}

export default FoodCard;
