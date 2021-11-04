import styled from "styled-components";

const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 6fr;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

export default AppContainer;