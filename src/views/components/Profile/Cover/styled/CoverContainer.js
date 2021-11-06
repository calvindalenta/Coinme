import styled from "styled-components";

const CoverContainer = styled.div`
    position: relative;
    width: 100%;
    height: 293px;
    /* border: 1px solid white; */

    & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export default CoverContainer;