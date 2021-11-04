import AppContainer from "../styled/AppContainer";
import Header from "../components/Header";

export default function NotFoundPage(props){
    document.title = "Coinme";

    return (
        <AppContainer>
            <Header />
            <p>There's nothing here!</p>
        </AppContainer>
    );
}