import styled from "styled-components";

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1em;

    img {
        width: 100%;
        height: 100%;
    }
`;

export default ImagesContainer;