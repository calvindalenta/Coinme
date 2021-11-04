import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { login } from "../../../state/ducks/profile/actions";

import Date from "../../UI/Date";
import LoginForm from "./LoginForm";

import NavList from "../../styled/NavList";
import ContentContainer from "../../styled/ContentContainer";

export const ContentSection = styled.main`
    position: relative;
    min-height: 100vh;
    background-color: ${({theme}) => theme.background};
    padding: 4em 15em 0 4em;
`; 

export function Login({ login }){

    const navigate = useNavigate()

    async function onLogin(phone, password){
        login(phone, password)
        navigate("/profile")
    }

    return (
        <ContentContainer>
            <Date />
            <NavList>
                <li><Link to="/login" className="active">Login</Link></li>
                <li><Link to="/register">Registration</Link></li>
            </NavList>
            <LoginForm login={onLogin}/>
        </ContentContainer>
    );
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(Login)