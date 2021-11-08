import styled from "styled-components";

const InformationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 1em;
    margin-block: 2em;

    .right {
        img {
            width: 100%;
        }

        button {
           text-align: center;
        }

        p {
            text-align: center;
        }
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }
`;

export default InformationGrid;