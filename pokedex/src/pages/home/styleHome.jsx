import styled from "styled-components";

export const HomeS = styled.section`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.write};
    margin-top: 130px;
    
    .verM{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pokeball};
    color: ${({ theme }) => theme.colors.write};
    border: 0;
    padding: 10px 10px;
    border-radius: 10px;
    outline: 3px solid #37474F;
    margin-top: 50px;
    margin-bottom: -90px;
    }
    .all{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .loading{
        width: 300px;
        margin-top: 100px;
        animation: whell 1s infinite;
    }
    .pok{
        width: 20%;
        height: 320px;
        border-radius: 20px;
        margin: 15px;
        padding: 5px;
        background-color: ${({ theme }) => theme.colors.backgroundPoke};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        transition: .2s;
        box-shadow: 3px 3px 10px #22222255;
        color: ${({ theme }) => theme.colors.write};
        text-decoration: none;
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
        box-shadow: 3px 3px 10px #33333355;
        border-radius: 50%;
       
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
        width: 200px;
        max-height: 300px;
    }
    .test{
        width: 100px;
        height: 100px;
        animation: whell 1s infinite;
        
    }

    @keyframes whell {
        0% {
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    @media screen and (max-width: 700px){
        .pok{
            width: 100%;
        }
    }
        
    
   
`

