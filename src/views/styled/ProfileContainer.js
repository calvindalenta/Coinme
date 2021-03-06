import styled from "styled-components";

const ProfileContainer = styled.div`
    width: 80%;
    margin: auto;
    background-color: ${({theme}) => theme.background};
    border-radius: 0 0 12px 12px;
    padding: 5em 1.5em 1em 1.5em;

    @media screen and (max-width: 600px){
        width: 95%;
    }
`;

export default ProfileContainer;