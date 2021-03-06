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
            <button className="Search-btn" onClick={handleClick}>
               <Icon className="Search-btn--icon" name="search" width="25" height="25" fill="transparent" stroke="#fff"></Icon>
            </button>
            <input className="Search-input" type="text" placeholder="Search" ref={inputSearch} />
        </Fragment>
    );
}

export default Search;