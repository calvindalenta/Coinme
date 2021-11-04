import Header from "../../components/Header";
import Login from "../../components/Login";
import "./LoginPage.scss";

export default function LoginPage(props){
    document.title = "Coinme - Login";

    return (
        <div className="app">
            <Header />
            <Login />
        </div>
    );
}