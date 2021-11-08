import styled from "styled-components";

export const ContentContainer = styled.main`
    position: relative;
    min-height: 100vh;
    background-color: ${({theme}) => theme.background};
    padding: 4em;

    @media screen and (max-width: 1080px){
        width: 100%;
    }

    @media screen and (max-width: 800px){
        padding: 2em;
    }
`; 

export default ContentContainer;