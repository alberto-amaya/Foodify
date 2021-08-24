import React, { Fragment } from 'react';
import '../css/normalize.css';
import './Home.css';
import Search from '../components/Search';

const Home = () => {
    const onSearch = (query) => {
        console.log(query);
    }
    return (
        <Fragment>
            <header>
                <div className="header-search">
                    <Search onSearch={onSearch} />
                </div>
            </header>
        </Fragment>
    )
}

export default Home;