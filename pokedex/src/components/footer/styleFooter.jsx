import styled from "styled-components";

export const FooterS = styled.footer`
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    width: 100%;
    height: 100px;
    color: ${({ theme }) => theme.colors.write};
    display: flex;
    align-items: center;
    justify-content: space-around;


    div{
        width: 33.3%;
        display: flex;
        align-items: center;
        justify-content: center;    
    }
    .links{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        svg{
            width: 50px;
            height: 50px;

        }
    }
    .link{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${({theme}) => theme.colors.write};
        text-decoration: none;
        p{
            margin: 0;
            font-size: 13px;
        }
        
    }

    img{
        width: 80px;
    }
    .left{
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
    }
    
`