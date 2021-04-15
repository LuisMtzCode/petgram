import React, { Fragment } from 'react';
import { Logo } from './components/Logo';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get('detail');

    return (
        <div>
            <GlobalStyles />
            <Logo/>
            {
                detailId ? <PhotoCardWithQuery id={detailId} /> :
                <Fragment>
                    <ListOfCategories />
                    <ListOfPhotoCards categoryId={1}/>
                </Fragment>
            }
        </div>
    );
};