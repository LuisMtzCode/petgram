import React, { Fragment, useState, useEffect } from 'react';
import { Category } from '../Category';
import { categories as mockCategories } from '../../db.json';

import { List, Item } from './styles';

const useCategoriesData = () => {
    const [categories, setCategories] = useState(mockCategories);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        // setLoading(true);
        // window.fetch('')
        // .then(res => res.json)
        // .then(response => {
            //     setCategories(response);
            //     setLoading(false);
        // })
    }, []);

    return { categories, loading };
}

export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData();
    const [showFixed, setShowfixed] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowfixed(newShowFixed);
        }
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
            }
        </List>);
    
        if(loading){
            return 'Cargando';
        }

        return (
            <Fragment>
                {renderList()}
                {showFixed && renderList(true)}
            </Fragment>
        );
}