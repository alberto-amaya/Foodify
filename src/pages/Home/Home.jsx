import React, { Fragment } from 'react';
import './Home.css';

import Search from '../../components/Search/Search';
import Filters from '../../components/filters/Filters'; 
import RandomRecipes from '../../components/randomRecipes/RandomRecipes';
import BottomNav from '../../components/bottomNav/BottomNav';
import SimilarRecipes from '../../components/similarRecipes/SimilarRecipes';

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
                <Filters />
            </header>
            <main>
                <article className="main-random">
                    <RandomRecipes />
                </article>
                <article className="main-similar">
                    <SimilarRecipes id="209128" />
                </article>
            </main>
            <BottomNav></BottomNav>
        </Fragment>
    )
}

export default Home;