import styled from "styled-components";

export const ButtonAddS = styled.div`
display: flex;
align-items: center;
justify-content: center;
button{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pokeball};
    color: ${({ theme }) => theme.colors.write};
    border: 0;
    padding: 10px;
    width: 200px;
    border-radius: 10px;
    outline: 3px solid #37474F;
}
    .disabled{
        background-color: gray;
        cursor: default;
    }
`