import { createGlobalStyle } from "styled-components";
import { ThemeType } from '../types/ThemeType'

export default createGlobalStyle<{theme: ThemeType}>`
:root{
    font-size: 62.5%;
}

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

 }

 body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    color: ${({ theme })=> theme.COLORS.WHITE};
    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    outline: none;
    -webkit-font-smoothing: antialiased;

 }

 a{
    text-decoration: none;
 }

 button,
 a{
    cursor: pointer;

    transition: filter 0.2s;
 }

 button:hover,
 a:hover{
    cursor: pointer;

     filter: brightness(0.9);
 }
`