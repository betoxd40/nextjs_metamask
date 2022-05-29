import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './app';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    *,
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    body {
        font-family: ${(props) => props.theme.fontFamily};
        font-size: 16px;
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.white};
    }
    a {
        text-decoration: none;
    }
    button {
        font-family: ${(props) => props.theme.fontFamily};
        font-size: 16px;
        background: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        &:disabled {
            cursor: not-allowed;
        }
    }
`;
