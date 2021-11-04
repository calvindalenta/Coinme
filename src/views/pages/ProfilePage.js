import AppContainer from "../styled/AppContainer";
import Header from "../components/Header";

export default function ProfilePage(props){
    document.title = "Coinme - Profile";

    return (
        <AppContainer>
            <Header />
            <p>Profile page here!</p>
        </AppContainer>
    );
}