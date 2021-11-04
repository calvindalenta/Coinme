import Header from "../../components/Header";
import Register from "../../components/Register";

import AppContainer from "../../styled/AppContainer";

export default function RegisterPage(props){
    document.title = "Coinme - Register";

    return (
        <AppContainer>
            <Header />
            <Register />
        </AppContainer>
    );
}