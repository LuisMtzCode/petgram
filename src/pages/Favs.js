import React, { Fragment } from 'react';
import { FavsWithQuery } from '../container/GetFavorites';
import { Layout } from '../components/Layout';

export default () => (
    <Layout title="Tus favoritos" subtitle="Aquí podemos encontrar tus favoritos">
        <Fragment>
            Favs
            <FavsWithQuery />
        </Fragment>
    </Layout>
);
