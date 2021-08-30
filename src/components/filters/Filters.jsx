import React, { useRef } from 'react'
import './Filters.css';
import Icon from "../iconComponent/Icon";


const Filters = () => {
    const filterButton = useRef(null);

    return (
        <button className="filters" ref={filterButton}>
            <Icon name="filter" ></Icon>
        </button>
    )
}

export default Filters;