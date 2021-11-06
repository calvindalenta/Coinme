import styled from "styled-components";

const ChangeCover = styled.label`
    cursor: pointer;
    position: absolute;
    bottom: 40%;
    right: 10%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    padding: 0.3em 0.5em;
    display: flex;
    align-items: center;
    width: max-content;

    p {
        font-size: 0.7em;
    }
`;

export default ChangeCover;