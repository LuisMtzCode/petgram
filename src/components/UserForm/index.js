import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { SubmitButton } from '../SubmitButton';
import { Form, Input, Title, Error } from './styles';

export const UserForm = ({ onSubmit, title, disabled, error }) => {
    const email = useInputValue('');
    const password = useInputValue('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    }

    return (
        <Fragment>
            <Title>{title}</Title>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Input disabled={disabled} type="email" placeholder="Email" value={email.value} onChange={email.onChange}/>
                <Input disabled={disabled} type="password" placeholder="Password" value={password.value} onChange={password.onChange}/>
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
            </Form>
            {error && <Error>{error}</Error>}
        </Fragment>
    )
}
