import styled from "styled-components";

export const MenuMobileS = styled.aside`
    .open{
        width: 100%;
        position: fixed;
        height: 100%;
        background-color: #202124c1;
        transition: .5s;
    }
    .close{
        transition: .5s;
        display: none;
    }
    .menu{
            width: 60%;
            height: 400px;
            background-color: ${({ theme }) => theme.colors.background};
            position: absolute;
            right: 0;
            top: 10px;
            border-radius: 10px 0 0 10px;
    }
    ul{
        display: flex;  
        flex-direction: column;
        justify-content: space-evenly;
        height: 250px;
    }
    li{
        list-style: none;
        width: 150px;
        position: relative;
    }
    a{
        text-decoration: none;
        color: white;  
        padding: 10px;
    }
    .active{
        background-color: ${({ theme }) => theme.colors.pokeball};
        border-radius: 10px;
        outline: 3px solid #37474F;
    }
    .qtdMyTeam{
      
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #EB2F00;
        border: 1px solid white;
        position: absolute;
        top: -5px;
        left: 80px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    
    }
`