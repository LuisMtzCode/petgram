import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animations';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    max-width: 500px;
    margin: 0 auto;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    text-decoration: none;
    &[aria-current] {
        color: #000;
        &:after {
            ${fadeIn({time: '0.5s'})}
            content: '·';
            position: absolute;
            bottom: 0;
            font-size: 34px;
            line-height: 20px;
        }
    }
`;