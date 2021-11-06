import styled from "styled-components";
import { FormInput } from "./FormInputs";

const DateInput = styled(FormInput)`
    width: 100%;
    border: none;
    outline: none;

    &:focus {
        outline: none;
    }
`;

const DateContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.accentSecondary};
    border-radius: 6px;
    padding-left: 1em;
    display: grid;
    grid-template-columns: auto 1fr;

    &:focus-within {
        border-bottom: 1px solid ${({theme}) => theme.accentPrimary};
    }

    img {
        width: 1em; 
        cursor: pointer; 
        justify-self: center;
        align-self: center;
    }
`;

export default function FormInputDate({ onChange, ...props }){
    return (
        <DateContainer>
            <img src="/assets/calendar.svg" alt="Eye Icon"/>
            <DateInput type="date" onChange={onChange} {...props}/>
        </DateContainer>
    )
}