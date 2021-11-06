import styled from "styled-components";

const HeaderContent = styled.div`
    width: 80%;
    margin: auto;
    background-color: ${({theme}) => theme.background};
    border-radius: 12px 12px 0 0;
    padding: 1.5em;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
`;

export default HeaderContent;