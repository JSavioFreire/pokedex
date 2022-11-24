import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        font-family: 'PT Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #756F77;
    }
`

export const theme = {
    colors:{
        background:'#414141',
        write:'#CCCCCC',
        writeDark:'#8C8C8C',
        backgroudDark:'#333333'
    }
}

