import React from 'react';
import { Logo } from './components/Logo';
import { GlobalStyles } from './styles/GlobalStyles';
import { Router } from '@reach/router'
//Pages
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

export const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Logo/>
            {
                <Router>
                    <Home path='/' />
                    <Home path='/pet/:categoryId' />
                    <Detail path='/detail/:detailId' />
                </Router>
            }
        </div>
    );
};