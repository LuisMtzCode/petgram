import React, { useContext, Fragment } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';

export const User = () => {
    const { removeAuth } = useContext(Context);
    return (
        <Fragment>
            User
            <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
        </Fragment>
    );
};
