import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        font-family: 'PT Sans', sans-serif;
        margin: 100px 0 0 0;
        padding: 0;
        box-sizing: border-box;
        position: relative;
        background-color: ${({ theme }) => theme.colors.background};
        ::-webkit-scrollbar-track {
            background-color: ${({theme}) => theme.colors.background};
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.colors.pokeball};
            border-radius: 10px;
        }
        overflow-x: hidden;

       
    }
    
`

export const theme = {
    colors: {
        background: '#414141',
        write: '#CCCCCC',
        writeDark: '#8C8C8C',
        backgroundDark: '#333333',
        pokeball: '#DD2C00',
        backgroundPoke: '#4D4D4D'

    }
    
}


