import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Router } from '@reach/router'
import Context from './Context';

import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';
//Pages
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';

export const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Logo/>
            <Router>
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                <Detail path='/detail/:detailId' />
            </Router>

            <Context.Consumer>
                {
                    ({ isAuth }) => {
                        return isAuth ?
                         <Router>
                            <Favs path='/favs' />
                            <User path='/user' />
                        </Router>
                        :
                        <Router>
                            <NotRegisteredUser path='/favs' />
                            <NotRegisteredUser path='/user' />
                        </Router>
                    } 
                }                
            </Context.Consumer>

            <NavBar />
        </div>
    );
};