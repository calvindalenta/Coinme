import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../../../state/ducks/profile/actions";

import Date from "../../UI/Date";
import ContentContainer from "../../styled/ContentContainer";
import NavList from "../../styled/NavList";

import RegisterForm from "./RegisterForm";

export function Register({ register }){

    const navigate = useNavigate()

    async function onRegister(phone, password, { countryCode, countryName }){
        register(phone, password)
        navigate("/login")
    }

    return (
        <ContentContainer>
            <Date />
            <NavList>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register" className="active">Registration</Link></li>
            </NavList>
            <RegisterForm submit={onRegister}/>
        </ContentContainer>
    );
}

const mapDispatchToProps = {
    register
}

export default connect(null, mapDispatchToProps)(Register)