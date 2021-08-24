import React, { Fragment } from 'react';
import BottomNav from '../components/bottomNav/BottomNav';

import Search from '../components/Search';

const Home = () => {
    return (
        <Fragment>
            <header>
                <Search />
            </header>
            
            <BottomNav></BottomNav>
        </Fragment>
    );
}

export default Home;