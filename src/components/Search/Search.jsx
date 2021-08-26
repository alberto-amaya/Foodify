import React, { Fragment, useRef } from 'react';
import './Search.css';

const Search = (props) => {
    const inputSearch = useRef(null);

    const handleClick = () => {
        props.onSearch(inputSearch.current.value);
        
    }
    const bgStyle={
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/icons/search.svg)`,
        
    }
    return (
        <Fragment>
            <input style={bgStyle} type="text" placeholder="Search" onChange={handleClick} ref={inputSearch} />
        </Fragment>
    );
}

export default Search;