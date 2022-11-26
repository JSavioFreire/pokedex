import styled from "styled-components";

export const HeaderS = styled.header`
    width: 100%;
    height: 100px;
    background-color: ${({theme}) => theme.colors.backgroundDark};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
    }
    ul{
        display: flex;  
        align-items: center;
        justify-content: space-between;
        width: 320px;
    }
    li{
        list-style: none;
    }
    img{
        width: 100px;
    }
    a{
        text-decoration: none;
        color: white;  
        padding: 10px;
    }
    .active{
        background-color: ${({theme}) => theme.colors.pokeball};
        border-radius: 10px;
        outline: 3px solid #37474F;
    }
    form{
        width: 50%;
        display: flex;
        height: 35px;
    }
    .text{
        width: 85%;
        border-radius: 10px;
        border: 0;
        outline: none;
        padding-left: 10px;

        ::placeholder{
        color: ${({theme}) => theme.colors.write};

        }
    }
    .bt{
        width: 15%;
        margin-left: 10px;
        border-radius: 10px;
        background-color: ${({theme}) => theme.colors.pokeball};
        color: white;
        outline: 3px solid #37474F;
        border: 0;

    }
`
