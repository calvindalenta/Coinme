import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../../../state/ducks/profile/actions";

import Date from "../Date";
import RegisterForm from "./RegisterForm";

import "./Register.scss";

export function Register({ register }){

    const navigate = useNavigate()

    async function onRegister(phone, password, { countryCode, countryName }){
        register(phone, password)
        navigate("/login")
    }

    return (
        <main>
            <Date />
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register" className="active">Registration</Link></li>
            </ul>
            <RegisterForm submit={onRegister}/>
        </main>
    );
}

const mapDispatchToProps = {
    register
}

export default connect(null, mapDispatchToProps)(Register)