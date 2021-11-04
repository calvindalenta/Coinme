import { useState } from "react";

import { FormActions } from "../../styled/forms/FormActions";
import { FormBody } from "../../styled/forms/FormBody";
import { FormHeader } from "../../styled/forms/FormHeaders";
import { FormItemRow } from "../../styled/forms/FormItemRow";
import { FormLabel } from "../../styled/forms/FormLabels";
import { FormInput } from "../../styled/forms/FormInputs";

import InputPassword from "../../UI/InputPassword/InputPassword";

import { minLength2 } from "../../utilities/validate";
import { createNotification } from "../../../utilities/helpers";
import { PrimaryButton, SecondaryButton } from "../../styled/Button";

export default function LoginForm({ login }){

    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    async function handleOnSubmitForm(e) {
        e.preventDefault();

        const checkPhone = minLength2(phoneNumber)
        const checkPassword = minLength2(password)
        if (checkPhone) {
            createNotification("error", checkPhone)
            return
        }
        if (checkPassword) {
            createNotification("error", checkPassword)
            return
        }

        login(phoneNumber, password)
    }

    function onChangePhone(e){
        setPhoneNumber(e.target.value);
    }

    function onChangePassword(e){
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={handleOnSubmitForm}>
            <FormBody className="form-body">
                <FormHeader>Login Account</FormHeader>
                <FormItemRow>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <FormInput 
                        className="form-input" 
                        type="number" 
                        id="phone" 
                        name="phone" 
                        placeholder="Including your country code"
                        onChange={onChangePhone}
                    />
                </FormItemRow>
                <FormItemRow>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputPassword 
                        className="form-input" 
                        id="password" 
                        name="password"
                        onChange={onChangePassword}
                    />
                </FormItemRow>
            </FormBody>
            <FormActions>
                <PrimaryButton type="reset">Reset</PrimaryButton>
                <SecondaryButton type="submit">Login</SecondaryButton>
            </FormActions>
        </form>
    );
}