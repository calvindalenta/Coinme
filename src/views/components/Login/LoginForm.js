import { useState } from "react";
import InputPassword from "../../UI/InputPassword/InputPassword";

export default function LoginForm({ login }){

    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    async function handleOnSubmitForm(e) {
        e.preventDefault();
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
            <div className="form-body">
                <h2 className="form-header">Login Account</h2>
                <div className="form-item">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                        className="form-input" 
                        type="number" 
                        id="phone" 
                        name="phone" 
                        placeholder="Including your country code"
                        onChange={onChangePhone}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="password" className="form-label">Password</label>
                    <InputPassword 
                        className="form-input" 
                        id="password" 
                        name="password"
                        onChange={onChangePassword}
                    />
                </div>
            </div>
            <div className="form-action">
                <button className="btn primary-btn" type="reset">Reset</button>
                <button className="btn secondary-btn" type="submit">Login</button>
            </div>
        </form>
    );
}