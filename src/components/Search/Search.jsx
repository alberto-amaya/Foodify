import React, { Fragment, useRef } from 'react';
import './Search.css';

const Search = (props) => {
    const inputSearch = useRef(null);

    const handleClick = () => {
        props.onSearch(inputSearch.current.value);
    }

    return (
        <Fragment>
            <button onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </button>
            <input type="text" placeholder="Search" ref={inputSearch} />
        </Fragment>
    );
}

export default Search;