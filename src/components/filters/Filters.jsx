import React, { useState, Fragment } from 'react';
import './Filters.css';

import Icon from '../iconComponent/Icon';
import Modal from '../modal/Modal';
import Filter from '../filter/Filter';

const Filters = () => {
    const [ active, setActive ] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    /* 
        maxReadyTime -> number 20 The maximum time in minutes it should take to prepare and cook the recipe.
        minCalories	-> number 50 The minimum amount of calories the recipe must have.
        maxCalories -> number 800 The maximum amount of calories the recipe can have.
        minFat -> number 1 The minimum amount of fat in grams the recipe must have.
        maxFat -> number 100 The maximum amount of fat in grams the recipe can have.
        minCarbs -> number	10	The minimum amount of carbohydrates in grams the recipe must have.
        maxCarbs -> number	100	The maximum amount of carbohydrates in grams the recipe can have.
        number -> number	10	The number of expected results (between 1 and 100).
    */

    return (
        <Fragment>
            <button className="filtersBtn" onClick={toggle}>
                <Icon name="filter" width="25" height="25" fill="transparent" stroke="#fff"></Icon>
            </button>

            <Modal active={active} toggle={toggle} title="Filters" height="330">
                <div className="filters">
                    <Filter />
                </div>
            </Modal>
        </Fragment>
    )
}

export default Filters;