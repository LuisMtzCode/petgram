import React, { Fragment } from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({ activateAuth }) => {
                    return (
                        <Fragment>
                            <RegisterMutation>
                                {
                                    (register, {data, loading, error}) => {
                                        const onSubmit = ({ email, password }) => {
                                            const input = { email, password };
                                            const variables = { input };
                                            register({ variables }).then(activateAuth);
                                        }

                                        const errorMsg = error && 'El usuario existe o hay algún problema';

                                        return <UserForm title='Registrarse' onSubmit={onSubmit} disabled={loading} error={errorMsg}/>
                                    }
                                }
                            </RegisterMutation>
                            <LoginMutation>
                                {
                                    (login, {data, loading, error}) => {
                                        const onSubmit = ({ email, password }) => {
                                            const input = { email, password };
                                            const variables = { input };
                                            login({ variables }).then(activateAuth);
                                        }

                                        const errorMsg = error && 'La contraseña no es correcta o el usuario no existe';

                                        return (
                                            <UserForm title='Iniciar Sesión' onSubmit={onSubmit} disabled={loading} error={errorMsg}/>
                                        );
                                    }
                                }
                            </LoginMutation>
                        </Fragment>
                    )
                }
            }
        </Context.Consumer>
    )
}
