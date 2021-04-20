import React, { useContext, Suspense } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Redirect, Router } from '@reach/router';
import { Context } from './Context';

import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';
//Pages
import { Home } from './pages/Home';
// import { Detail } from './pages/Detail';
// import { Favs } from './pages/Favs';
// import { User } from './pages/User';
// import { NotFound } from './pages/NotFound';
// import { NotRegisteredUser } from './pages/NotRegisteredUser';

const Favs = React.lazy(() => import('./pages/Favs'));
const Detail = React.lazy(() => import('./pages/Detail'));
const User = React.lazy(() => import('./pages/User'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));

export const App = () => {
    const { isAuth } = useContext(Context);
    return (
        <Suspense fallback={<div />}>
            <GlobalStyles />
            <Logo/>
            <Router>
                <NotFound default/>
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                <Detail path='/detail/:detailId' />
                { !isAuth && <NotRegisteredUser path='/login' />}
                { !isAuth && <Redirect noThrow from='/favs' to='/login' />}
                { !isAuth && <Redirect noThrow from='/user' to='/login' />}
                { isAuth && <Redirect noThrow from='/login' to='/' />}
                <Favs path='/favs' />
                <User path='/user' />
            </Router>
            <NavBar />
        </Suspense>
    );
};