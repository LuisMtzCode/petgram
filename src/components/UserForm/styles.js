import styled from 'styled-components';

export const Form = styled.form`
    padding: 20px 0px;
`;

export const Input = styled.input`
    border: 1px solid #eee;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
    
    &[disabled] {
        opacity: 0.3;
    }
`;

export const Button = styled.button`
    background: #8d00ff;
    border-radius: 3px;
    height: 32px;
    color: #fff;
    display: block;
    width: 100%;
    text-align: center;
    
    &[disabled] {
        opacity: 0.3;
    }
`;

export const Title = styled.h2`
    font-size: 23px;
    font-weight: 500;
    padding: 8px 0px;
    margin: 0;
    text-align: center;
`;

export const Error = styled.span`
    font-size: 14px;
    color: red;
`;