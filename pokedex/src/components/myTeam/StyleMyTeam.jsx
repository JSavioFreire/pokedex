import styled from "styled-components";

export const MyTeamS = styled.div`
    width: 80%;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.write};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;

    .time{
        background-color: ${({ theme }) => theme.colors.write};
        color: ${({ theme }) => theme.colors.background};
        width: 70%;
        padding: 30px;
        border-radius: 50px;
        box-shadow: 3px 3px 10px #22222255;
        margin-bottom: 50px;
    }
    .pokemonInTeam{
        width: 90%;
        background-color: ${({ theme }) => theme.colors.background};
        border-radius: 20px;
        padding: 0 20px;
        margin: 5px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color:${({ theme }) => theme.colors.write};
        text-transform: capitalize;
        
        img{
            width: 80px;
        }
        span{
            text-transform: lowercase;
        }
        .del{
            margin-top: 12px;
            color: ${({ theme }) => theme.colors.pokeball};
            font-size: 25px;
        }

        @media screen and (max-width: 700px){
            .time{
                width: 100%;
            }
            .pokemonInTeam{
            }
            img{
                width: 70px;
            }
            h2{
                font-size: 12px;
            }
            h1{
                font-size: 15px;
            }
        }
    }
`