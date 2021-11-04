import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../../state/ducks/profile/actions";

import Date from "../Date";
import LoginForm from "./LoginForm";

import "./Login.scss";

export function Login({ login }){

    const navigate = useNavigate()

    async function onLogin(phone, password){
        login(phone, password)
        navigate("/profile")
    }

    return (
        <main>
            <Date />
            <ul>
                <li><Link to="/login" className="active">Login</Link></li>
                <li><Link to="/register">Registration</Link></li>
            </ul>
            <LoginForm login={onLogin}/>
        </main>
    );
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(Login)