import React, { Fragment, useRef } from 'react';
import Icon from '../iconComponent/Icon';
import './Search.css';

const Search = (props) => {
    const inputSearch = useRef(null);

    const handleClick = () => {
        props.onSearch(inputSearch.current.value);
    }

    return (
        <Fragment>
            <button onClick={handleClick}>
               <Icon name="search" fill="transparent" stroke="#fff"></Icon>

            </button>
            <input type="text" placeholder="Search" ref={inputSearch} />
        </Fragment>
    );
}

export default Search;