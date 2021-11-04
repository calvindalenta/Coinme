import { useState } from "react";
import styled from "styled-components";

import { FormInputPassword } from "../../styled/forms/FormInputs";

const PasswordContainer = styled.div`
    width: 100%;
    border: 1px solid ${({theme}) => theme.accentSecondary};
    border-radius: 6px;
    padding-right: 1em;
    display: grid;
    grid-template-columns: 1fr auto;

    &:focus-within {
        border: 1px solid ${({theme}) => theme.accentPrimary};
    }

    img {
        width: 1.5em; 
        cursor: pointer; 
        justify-self: center;
        align-self: center;
    }
`;
export default function InputPassword({ id, name, onChange, ...rest }){

    const [isPassword, setIsPassword] = useState(true)

    return (
        <PasswordContainer>
            <FormInputPassword 
                {...rest}type={isPassword ? "password" : "text"} 
                id={id} name={name} 
                onChange={onChange}
            />
            <img src="/assets/eye.svg" alt="Eye Icon" onClick={() => setIsPassword(!isPassword)}/>
        </PasswordContainer>
    )
}