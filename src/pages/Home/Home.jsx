import React, { Fragment } from 'react';
import './Home.css';

import Search from '../../components/Search/Search';
import Trend from '../../components/trendComponent/Trend';
import BottomNav from '../../components/bottomNav/BottomNav';

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
            <main>
                <div className="main-trend">
                    <Trend />
                </div>
            </main>
            <BottomNav></BottomNav>
        </Fragment>
    )
}

export default Home;