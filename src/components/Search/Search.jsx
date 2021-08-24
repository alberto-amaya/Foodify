import React, { Fragment, useRef } from 'react';
import './Search.css';
import Icon from '../iconComponent/Icon.jsx';

const Search = (props) => {
    const inputSearch = useRef(null);

    const handleClick = () => {
        props.onSearch(inputSearch.current.value);
    }
    return (
        <Fragment>
            <input type="text" placeholder="Search" onChange={handleClick} ref={inputSearch} />
            <button>
                <Icon name="Search" alt="SearchIcon" color="#929298"/>
            </button>
        </Fragment>
    );
}

export default Search;