import styled from "styled-components";

export const FormInput = styled.input`
    border: none;
    outline: 1px solid ${({theme}) => theme.accentSecondary};
    border-radius: 6px;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textPrimary};
    padding: 0.8em;
    font-family: Roboto, Poppins, sans-serif;

    &:focus {
        outline: 1px solid ${({theme}) => theme.accentPrimary};
    }
`;

export const FormInputPassword = styled(FormInput)`
    width: 100%;
    border: none;
    outline: none;

    &:focus {
        outline: none;
    }
`;


export const FormSelect = styled.select`
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme}) => theme.accentSecondary};
    border-radius: 6px;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textPrimary};
    padding: 0.8em;
    font-family: Roboto, Poppins, sans-serif;

    &:focus {
        border-bottom: 1px solid ${({theme}) => theme.accentPrimary};
    }
`

export const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    border: none;
    outline: 1px solid ${({theme}) => theme.accentSecondary};
    border-radius: 6px;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textPrimary};
    padding: 1em;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9em;

    &:focus {
        outline: 1px solid ${({theme}) => theme.accentPrimary};
    }
`;