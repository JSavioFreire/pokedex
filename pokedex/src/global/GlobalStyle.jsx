import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        font-family: 'PT Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.colors.background};
    }
`

export const theme = {
    colors:{
        background:'#414141',
        write:'#CCCCCC',
        writeDark:'#8C8C8C',
        backgroundDark:'#333333'
    }
}

