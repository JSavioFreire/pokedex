import styled from "styled-components";

export const PokemonsS = styled.section`
    width: 80%;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.write};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        text-transform: capitalize;
        font-size: 40px;
    }
    .all{
        display: flex;
        justify-content: space-around;
        width: 80%;
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
`