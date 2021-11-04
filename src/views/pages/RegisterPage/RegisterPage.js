import Header from "../../components/Header";
import Register from "../../components/Register";
import "./RegisterPage.scss";

export default function RegisterPage(props){
    document.title = "Coinme - Register";

    return (
        <div className="app">
            <Header />
            <Register />
        </div>
    );
}