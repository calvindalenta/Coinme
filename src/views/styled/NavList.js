import styled from "styled-components";

const NavList = styled.ul`
    border-bottom: 2px solid ${({theme}) => theme.accentSecondary};
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    padding-top: 1em;

    a {
        color: ${({theme}) => theme.textSecondary};
        font-weight: 500;
        padding-inline: 1em;
        
        &.active {
            color: ${({theme}) => theme.textPrimary};
            border-image: linear-gradient(90deg, #563EEE 0%, #5C7AE5 100%);
            border-width: 0 0 3px 0;
            border-image-slice: 9;
            border-style: solid;
        }
    }
`;

export default NavList;