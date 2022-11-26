import styled from "styled-components";

export const SinglePokemonS = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
button{
    width: 120px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.pokeball};
    color: ${({ theme }) => theme.colors.write};
    outline: 3px solid #37474F;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    margin: 50px 0; 
    
}
`
