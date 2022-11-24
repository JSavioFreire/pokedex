import styled from "styled-components";

export const HomeS = styled.section`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.write};
    background-color: ${({ theme }) => theme.colors.background};
    .pok{
        width: 20%;
        min-width: 200px;
        height: 250px;
        background-color: #F4F4F4;
        border-radius: 20px;
        margin: 15px;
        padding: 5px;
        background-color: #4D4D4D;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        transition: .2s;
        :hover{
            margin-top: -20px;
        }
    }
    .headerCard{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 30px;
    }
    h1{
        font-size: 22px;
        text-transform: capitalize;
        margin-left: 10px;
    }
    h2{
        font-size: 16px;
    }
    .type{
        width: 30px;
        height: 30px;
        margin: 0 5px;
       
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
    }
    .flexType{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 80%;
        max-height: 200px;
    }
`