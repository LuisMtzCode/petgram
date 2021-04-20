import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { Layout } from '../components/Layout';

export const Home = ({ categoryId }) => {
    return (
        <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales muy bonitos'>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={categoryId}/>
        </Layout>
    );
};
