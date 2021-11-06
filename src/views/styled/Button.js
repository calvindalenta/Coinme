import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    font-weight: 500;
    padding-block: 0.8em;
    border: none;
    border-radius: 4px;
`;

export const PrimaryButton = styled(Button)`
    color: ${({theme}) => theme.textPrimary};
    background-color: ${({theme}) => theme.background};
    border: 2px solid ${({theme}) => theme.accentSecondary};
    padding-inline: 2em;
`;

export const SecondaryButton = styled(Button)`
    color: ${({theme}) => theme.background};
    background-color: ${({theme}) => theme.buttonBgReverse};
    padding-inline: 1.5em;
`;

export const AccentLabel = styled.label`
    cursor: pointer;
    font-weight: 500;
    text-align: center;
    padding-block: 0.8em;
    border: none;
    border-radius: 4px;
    width: 100%;
    background-color: ${({theme}) => theme.accentPrimary};
    color: ${({theme}) => theme.textPrimary};
    font-weight: 500;
    font-family: 'Roboto', 'Poppins', sans-serif;
`;

export const LogoutButton = styled(AccentLabel)`
    font-size: 0.8em;
    padding: 0.5em 1em;
`;

export const ClickableImage = styled.img`
    cursor: pointer;
`