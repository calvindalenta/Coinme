import styled from "styled-components";

const WelcomeContainer = styled.header`
    min-height: 100vh;
    background-color: ${({theme}) => theme.welcomeBackground};
    padding: 4em 4em 0 4em;
    
    @media screen and (max-width: 768px){
        height: auto;
        min-height: auto;
        padding-bottom: 4em;
    }

    .logo {
        display: flex;
        gap: 0.5em;

        p {
            font-weight: 500;
            font-size: 0.9em;
        }
    }

    .welcome {
        width: 80%;
        margin-left: 2em;
        margin-top: 3em;

        h1 {
            font-size: 2em;
        }

        p {
            color: ${({theme}) => theme.textSecondary};
        }
    }
`

export default WelcomeContainer;