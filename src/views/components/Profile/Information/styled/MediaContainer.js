import styled from "styled-components";

const MediaContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5em;
    margin-block: 1em;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default MediaContainer;