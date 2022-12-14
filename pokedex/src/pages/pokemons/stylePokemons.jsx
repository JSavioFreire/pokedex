import styled from "styled-components";

export const PokemonsS = styled.section`
    width: 90%;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.write};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        text-transform: capitalize;
        font-size: 40px;
    }
    a{
        text-decoration: none;
        width: 30%;
    }
    .nameId{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 60px;
        margin-top: 40px;
    }
    .all{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    .about{
        width: 50%;
    }
    .image{
        width: 35%;
    }
    .types{
        text-transform: capitalize;
        text-align: center;
    }
    .animate{
        width: 80px;
    }
    h2{
        margin-left: 50px;
    }
    .margin{
        margin-bottom: 50px;
    }
 
.evol{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

}
.evolveEach{
    width: 100%;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 20px;
    margin: 5px 0;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
}
.evolveImg{
    width: 100px;
}
.flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    color: ${({ theme }) => theme.colors.write};
    flex-wrap: wrap;
}

@media screen and (max-width: 700px){

    .all{
        flex-direction: column;
    }
    .about{
        width: 100%;
    }
    .image{
        position: absolute;
    }
    .image img{
        display: none;
    }
    .evolveEach{
        height: 200px;
        p{
            font-size: 13px;
        }
    }
}

`