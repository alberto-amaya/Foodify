import React, { Fragment } from 'react';
import '../css/normalize.css';

import Search from '../components/Search';

const Home = () => {
    return (
        <Fragment>
            <header>
                <Search />
            </header>
        </Fragment>
    );
}

export default Home;