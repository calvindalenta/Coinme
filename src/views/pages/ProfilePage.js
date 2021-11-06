import AppContainer from "../styled/AppContainer";
import Header from "../components/Header";
import Profile from "../components/Profile";

export default function ProfilePage(props){
    document.title = "Coinme - Profile";

    return (
        <AppContainer>
            <Header />
            <Profile />
        </AppContainer>
    );
}