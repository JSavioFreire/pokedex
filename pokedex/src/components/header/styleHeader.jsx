import styled from "styled-components";

export const HeaderS = styled.header`
    width: 100%;
    height: 100px;
    background-color: ${({theme}) => theme.colors.backgroundDark};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: fixed;
    top: 0;
    left: 0;

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
        position: relative;
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
    .qtdMyTeam{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #EB2F00;
        border: 1px solid white;
        position: absolute;
        top: -5px;
        right: -10px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
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
    .alert{
        background-color: red;
    }
    @media screen and (max-width: 700px) {
        section{
            width: 95%;
        }
        img{
            width: 50px;
        }
        nav{
            display: none;
        }
    }
`
