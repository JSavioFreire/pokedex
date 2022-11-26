import styled from "styled-components";

export const PokemonsS = styled.section`
    width: 80%;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.write};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h1{
        text-transform: capitalize;
        font-size: 40px;
    }
    .all{
        display: flex;
        justify-content: space-around;
    }
    .about{
        
    }
    .image{
        

    }
    .types{
        text-transform: capitalize;
    }
    .animate{
        width: 80px;
    }
    button{
        width: 120px;
        height: 40px;
        background-color: ${({theme}) => theme.colors.pokeball};
        color: ${({theme}) => theme.colors.write};
        outline: 3px solid #37474F;
        border: 0;
        border-radius: 10px;
        cursor: pointer;
        margin: 50px 0; 
    }
`