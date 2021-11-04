import { useState } from "react";

import "./InputPassword.scss";

export default function InputPassword({ id, name, onChange, ...rest }){

    const [isPassword, setIsPassword] = useState(true)

    return (
        <div className="password-container">
            <input {...rest} className="password-input" type={isPassword ? "password" : "text"} id={id} name={name} onChange={onChange}/>
            <img src="/assets/eye.svg" alt="Eye Icon" onClick={() => setIsPassword(!isPassword)}/>
        </div>
    )
}