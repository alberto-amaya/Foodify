import React, { Fragment } from 'react';
import BottomNav from '../components/bottomNav/BottomNav';

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
            
            <BottomNav></BottomNav>
        </Fragment>
    )
}

export default Home;