import styled from "styled-components";

const Careers = styled.div`
    font-size: 16px;
    margin-top: 3em;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5em;

    p:first-child{
        font-weight: bold;
    }

    p:last-child{
        color: ${({theme}) => theme.textSecondary}
    }
`;

export default Careers;