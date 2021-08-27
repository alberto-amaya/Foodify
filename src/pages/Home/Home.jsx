import React, { Fragment } from 'react';
import './Home.css';

import Search from '../../components/Search/Search';
import RandomRecipes from '../../components/randomRecipes/RandomRecipes';
import BottomNav from '../../components/bottomNav/BottomNav';
import HotRecipes from '../../components/hotRecipesComponent/HotRecipes';

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
                <article className="main-trend">
                    <RandomRecipes />
                </article>
                <article className="main-hot-recipes">
                    <HotRecipes />
                </article>
            </main>
            <BottomNav></BottomNav>
        </Fragment>
    )
}

export default Home;