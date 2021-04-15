import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    body{
        background: #fefefe;
        height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        overscroll-behavior: none;
        width: 100%;
    }

    #app {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
    }

    ul {
        list-style: none;
    }

    button {
        background: transparent;
        border: none;
    }
`;