import React, { Fragment, useRef } from 'react';
import './Search.css';
import SearchIcon from '../assets/icons/Search.svg';

const Search = (props) => {
    const inputSearch = useRef(null);

    const handleClick = () => {
        props.onSearch(inputSearch.current.value);
    }
    return (
        <Fragment>
            <input type="text" placeholder="Search" onChange={handleClick} ref={inputSearch} />
            <button>
                <img src={SearchIcon} alt="SearchIcon" />
            </button>
        </Fragment>
    );
}

export default Search;