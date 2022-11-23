import styled from "styled-components";

export const HomeS = styled.section`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    flex-wrap: wrap;

    .pok{
        width: 250px;
        height: 300px;
        background-color: red;
        border-radius: 3px;
        margin: 15px;
        padding: 5px;
        border: 5px solid yellow;
    }
    h1{
        font-size: 22px;
        text-transform: capitalize;
        margin-top: 0;
        margin-left: 10px;
    }
    .type{
        width: 20px;
        height: 20px;
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
    }
    img{
        width: 80%;
        max-height: 180px;
    }
`