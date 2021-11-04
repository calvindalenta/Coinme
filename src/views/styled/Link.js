import styled from "styled-components";

export const LinkContainer = styled.div`
    cursor: pointer;
    width: max-content;
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-block: 1em;

    &:hover {
        border-bottom: 1px solid ${({theme}) => theme.accentPrimary};
    }
`;

export const LinkText = styled.p`
    color: ${({theme}) => theme.accentPrimary};
    font-size: 0.9em;
`;