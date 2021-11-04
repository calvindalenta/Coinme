import Header from "../../components/Header";
import Login from "../../components/Login";

import AppContainer from "../../styled/AppContainer";

export default function LoginPage(props){
    document.title = "Coinme - Login";

    return (
        <AppContainer>
            <Header />
            <Login />
        </AppContainer>
    );
}